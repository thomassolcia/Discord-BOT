"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Queue class.
 * @noInheritDoc
 */
class Queue extends Array {
    /**
     * Creates an instance of Queue.
     * @param {ErelaClient} erela - The Erela Client.
     */
    constructor(erela) {
        super();
        this.erela = erela;
    }
    /**
     * Returns the total duration of the queue.
     * @returns {number} - The duration of the queue.
     */
    get duration() {
        return this.map((track) => track.duration).reduce((acc, cur) => acc + cur, 0);
    }
    /**
     * Returns the size of the queue.
     * @returns {number} - The size of the queue.
     */
    get size() {
        return this.length;
    }
    /**
     * Returns if the queue is empty or not.
     * @returns {boolean} - If the queue is empty or not.
     */
    get empty() {
        return this.size === 0;
    }
    /**
     * Adds a track to the queue.
     * @param {(Track|Track[])} track - The track or tracks to add.
     * @param {number} [offset=0] - The offset to add the track at.
     */
    add(track, offset = 0) {
        if (!(Array.isArray(track) || track instanceof this.erela.track)) {
            throw new RangeError("Queue#add(track: Track|Track[]) Track must be a \"Track\" or \"Track[]\".");
        }
        if (isNaN(offset)) {
            throw new RangeError("Queue#add(track: Track|Track[], offset: number) Offset must be a number.");
        }
        if (offset < 0 || offset > this.size) {
            // tslint:disable-next-line: max-line-length
            throw new RangeError(`Queue#add(track: Track|Track[], offset: number) Offset must be or between 0 and ${this.size}.`);
        }
        if (offset === 0) {
            this.push(track);
        }
        else {
            this.splice(offset, 0, track);
        }
    }
    /**
     * Removes a track to the queue. Defaults to the first track.
     * @param {(Track|number)} [track=0] - The track to remove.
     * @returns {(Track|null)} - The track that was removed, or null if the track does not exist.
     */
    removeFrom(start, end) {
        if (typeof start === "undefined") {
            throw new RangeError(`Queue#removeFrom(start: number, end: number) Missing "start" parameters.`);
        }
        else if (typeof end === "undefined") {
            throw new RangeError(`Queue#removeFrom(start: number, end: number) Missing "end" parameters.`);
        }
        else if (start >= end) {
            throw new RangeError(`Queue#removeFrom(start: number, end: number) Start can not be bigger than end.`);
        }
        else if (start >= this.size) {
            throw new RangeError(`Queue#removeFrom(start: number, end: number) Start can not be bigger than ${this.size}.`);
        }
        return this.splice(start, end);
    }
    /**
     * Removes a track to the queue. Defaults to the first track.
     * @param {(Track|number)} [track=0] - The track to remove.
     * @returns {(Track|null)} - The track that was removed, or null if the track does not exist.
     */
    remove(track = 0) {
        const position = typeof track === "number" ? track : this.indexOf(track);
        if (position === -1) {
            return null;
        }
        return this.splice(position, 1)[0];
    }
    /**
     * Clears the queue.
     */
    clear() {
        this.splice(0);
    }
    /**
     * Shuffles the queue.
     */
    shuffle() {
        const track = this.shift();
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
        this.unshift(track);
    }
}
exports.Queue = Queue;
