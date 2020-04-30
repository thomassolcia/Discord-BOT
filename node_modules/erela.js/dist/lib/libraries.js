"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: max-line-length
const libraries = {
    "discord.js": {
        ws: {
            string: "raw",
            get: (client) => client.ws,
        },
        findChannel: (client, ID) => (client.channels.get ? client.channels : client.channels.cache).get(ID),
        findGuildChannel: (guild, ID) => (guild.channels.get ? guild.channels : guild.channels.cache).get(ID),
        findGuild: (client, ID) => (client.guilds.get ? client.guilds : client.guilds.cache).get(ID),
        isSharded: (client) => client.ws.shards,
        sendWS: (client, data) => client.ws.send(data),
        sendShardWS: (guild, data) => guild.shard.send(data),
    },
    "eris": {
        ws: {
            string: "rawWS",
            get: (client) => client.shards.get(0).ws,
        },
        findChannel: (client, ID) => client.getChannel(ID),
        findGuildChannel: (guild, ID) => guild.channels.get(ID),
        findGuild: (client, ID) => client.guilds.get(ID),
        isSharded: (client) => client.shards.size > 1,
        sendWS: (client, data) => client.shards.get(0).ws.send(JSON.stringify(data)),
        sendShardWS: (guild, data) => guild.shard.ws.send(JSON.stringify(data)),
    },
};
exports.default = libraries;
