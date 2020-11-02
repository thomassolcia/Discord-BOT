require("dotenv").config();
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});
client.commands = new Enmap();
console.log(`[True] Carregado | [False] Com erro`);
console.log('\n     [Status dos Comandos]      \n')
fs.readdir("./commands/animais/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/animais/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[True] ${commandName}`);
        client.commands.set(commandName, props);
    });
});
fs.readdir("./commands/info/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/info/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[True] ${commandName}`);
        client.commands.set(commandName, props);
    });
});
fs.readdir("./commands/uteis/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/uteis/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[True] ${commandName}`);
        client.commands.set(commandName, props);
    });
});
fs.readdir("./commands/staff/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/staff/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[True] ${commandName}`);
        client.commands.set(commandName, props);
    });
});
fs.readdir("./commands/steam/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/steam/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[True] ${commandName}`);
        client.commands.set(commandName, props);
    });
});
client.login(config.token);