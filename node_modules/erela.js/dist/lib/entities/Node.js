"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
/**
 * The Node class.
 */
class Node {
    /**
     * Creates an instance of Node and connects after being created.
     * @param {ErelaClient} erela - The Erela client.
     * @param {INodeOptions} options - The Node options.
     */
    constructor(erela, options) {
        this.erela = erela;
        this.websocket = null;
        /**
         * The amount the node will try to reconnect.
         */
        this.reconnectAttempts = 0;
        /**
         * The amount of REST calls the node has made.
         */
        this.calls = 0;
        this.options = options;
        this.retryAmount = this.options.retryAmount || 5;
        this.retryDelay = this.options.retryDelay || 30e3;
        this.stats = {
            players: 0,
            playingPlayers: 0,
            uptime: 0,
            memory: {
                free: 0,
                used: 0,
                allocated: 0,
                reservable: 0,
            },
            cpu: {
                cores: 0,
                systemLoad: 0,
                lavalinkLoad: 0,
            },
        };
        this.connect();
    }
    /**
     * Returns if connected to the Node.
     */
    get connected() {
        if (!this.websocket) {
            return false;
        }
        return this.websocket.readyState === ws_1.default.OPEN;
    }
    /**
     * Changes the node options and reconnects.
     * @param {INodeOptions} options - The new Nodes options.
     */
    setOptions(options) {
        if (!options || !options.host || !options.port || !options.password) {
            throw new RangeError("Player#setOption(options: INodeOptions) Options must be of type INodeOptions.");
        }
        this.options = options;
        this.retryAmount = options.retryAmount || this.retryAmount;
        this.retryDelay = options.retryDelay || this.retryDelay;
        this.connect();
    }
    /**
     * Connects to the Node.
     */
    connect() {
        const headers = {
            "Authorization": this.options.password,
            "Num-Shards": String(this.erela.shardCount),
            "User-Id": this.erela.userId,
        };
        this.websocket = new ws_1.default(`ws://${this.options.host}:${this.options.port}/`, { headers });
        this.websocket.on("open", this._onOpen.bind(this));
        this.websocket.on("close", this._onClose.bind(this));
        this.websocket.on("message", this._onMessage.bind(this));
        this.websocket.on("error", this._onError.bind(this));
    }
    /**
     * Reconnects to the Node.
     */
    reconnect() {
        this.reconnectTimeout = setTimeout(() => {
            if (this.reconnectAttempts >= this.retryAmount) {
                this.erela.emit("nodeError", this, new Error(`Unable to connect after ${this.retryAmount}`));
                this.destroy();
                return;
            }
            this.websocket.removeAllListeners();
            this.websocket = null;
            this.erela.emit("nodeReconnect", this);
            this.connect();
            this.reconnectAttempts++;
        }, this.retryDelay);
    }
    /**
     * Destroys the Node.
     */
    destroy() {
        if (!this.connected) {
            return;
        }
        this.websocket.close(1000, "destroy");
        this.websocket.removeAllListeners();
        this.websocket = null;
    }
    /**
     * Sends data to the Node.
     * @param {object} data - The data to send.
     */
    send(data) {
        return new Promise((resolve, reject) => {
            if (!this.connected) {
                return resolve(false);
            }
            if (!data || !JSON.stringify(data).startsWith("{")) {
                return reject(false);
            }
            this.websocket.send(JSON.stringify(data), (error) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    _onOpen() {
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
        }
        this.erela.emit("nodeConnect", this);
    }
    _onClose(code, reason) {
        this.erela.emit("nodeDisconnect", this, { code, reason });
        if (code !== 1000 || reason !== "destroy") {
            this.reconnect();
        }
    }
    _onMessage(d) {
        if (Array.isArray(d)) {
            d = Buffer.concat(d);
        }
        else if (d instanceof ArrayBuffer) {
            d = Buffer.from(d);
        }
        const message = JSON.parse(d.toString());
        if (!message.op) {
            return;
        }
        switch (message.op) {
            case "stats":
                this.stats = Object.assign({}, message);
                delete this.stats.op;
                break;
            case "playerUpdate":
                const player = this.erela.players.get(message.guildId);
                if (!player) {
                    return;
                }
                player.position = message.state.position || 0;
                break;
            case "event":
                this.handleEvent(message);
                break;
            default:
                this.erela.emit("nodeError", new Error(`Unexpected op "${message.op}" with data ${message}`));
                return;
        }
    }
    _onError(error) {
        if (!error) {
            return;
        }
        this.erela.emit("nodeError", this, error);
        this.reconnect();
    }
    handleEvent(message) {
        if (!message.guildId) {
            return;
        }
        const player = this.erela.players.get(message.guildId);
        if (!player) {
            return;
        }
        const track = player.queue[0];
        switch (message.type) {
            case "TrackStartEvent": break;
            case "TrackEndEvent":
                if (track && player.trackRepeat) {
                    this.erela.emit("trackEnd", player, track);
                    player.play();
                }
                else if (track && player.queueRepeat) {
                    this.erela.emit("trackEnd", player, track);
                    player.queue.add(player.queue.shift());
                    player.play();
                }
                else if (player.queue.size === 1) {
                    player.queue.shift();
                    player.playing = false;
                    if (["REPLACED", "FINISHED", "STOPPED"].includes(message.reason)) {
                        this.erela.emit("queueEnd", player);
                    }
                }
                else if (player.queue.size > 0) {
                    player.queue.shift();
                    this.erela.emit("trackEnd", player, track);
                    player.play();
                }
                break;
            case "TrackStuckEvent":
                player.queue.shift();
                this.erela.emit("trackStuck", player, track, message);
                break;
            case "TrackExceptionEvent":
                player.queue.shift();
                this.erela.emit("trackError", player, track, message);
                break;
            case "WebSocketClosedEvent":
                if ([4015, 4009].includes(message.code)) {
                    this.erela.sendWS({
                        op: 4,
                        d: {
                            guild_id: message.guildId,
                            channel_id: player.voiceChannel.id || player.voiceChannel,
                            self_mute: player.options.selfMute || false,
                            self_deaf: player.options.selfDeaf || false,
                        },
                    });
                    break;
                }
                this.erela.emit("socketClosed", player, message);
                break;
            default:
                throw new Error(`Node#event Unknown event '${message.type}'.`);
        }
    }
}
exports.Node = Node;
