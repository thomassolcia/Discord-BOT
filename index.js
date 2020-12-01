require("dotenv").config();
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
//const client = new Discord.Client();
const config = require("./config.json");
const Settings = global.Settings = require("./Settings/Settings.json");

console.log("Launching bot...");
let _client = new Discord.Client();
if (Settings.Private_Server === true) {
    _client = new Discord.Client({
        fetchAllMembers: true
    });
}

const client = global.client = _client;

const Commands = global.Commands = new Map();
console.log("--------------------------------");
console.log("Carregando comandos...");
fs.readdirSync("./commands/animais/", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./commands/animais/${file}`);
    if (prop.conf.commands == undefined || prop.run == undefined) return console.error(`[COMMAND] ${file} não foi carregado.`);
    if (prop.conf.commands && prop.conf.commands.length > 0) {
        prop.conf.commands.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof (prop.onLoad) == "function") prop.onLoad(client);
    console.log(`[COMANDO] Um total de ${prop.conf.commands.length} suportes foram instalados para ${file}.`);
});
fs.readdirSync("./commands/info/", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./commands/info/${file}`);
    if (prop.conf.commands == undefined || prop.run == undefined) return console.error(`[COMMAND] ${file} não foi carregado.`);
    if (prop.conf.commands && prop.conf.commands.length > 0) {
        prop.conf.commands.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof (prop.onLoad) == "function") prop.onLoad(client);
    console.log(`[COMANDO] Um total de ${prop.conf.commands.length} suportes foram instalados para ${file}.`);
});
fs.readdirSync("./commands/staff/", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./commands/staff/${file}`);
    if (prop.conf.commands == undefined || prop.run == undefined) return console.error(`[COMMAND] ${file} não foi carregado.`);
    if (prop.conf.commands && prop.conf.commands.length > 0) {
        prop.conf.commands.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof (prop.onLoad) == "function") prop.onLoad(client);
    console.log(`[COMANDO] Um total de ${prop.conf.commands.length} suportes foram instalados para ${file}.`);
});
fs.readdirSync("./commands/uteis/", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./commands/uteis/${file}`);
    if (prop.conf.commands == undefined || prop.run == undefined) return console.error(`[COMMAND] ${file} não foi carregado.`);
    if (prop.conf.commands && prop.conf.commands.length > 0) {
        prop.conf.commands.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof (prop.onLoad) == "function") prop.onLoad(client);
    console.log(`[COMANDO] Um total de ${prop.conf.commands.length} suportes foram instalados para ${file}.`);
});
fs.readdirSync("./commands/stats/", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./commands/stats/${file}`);
    if (prop.conf.commands == undefined || prop.run == undefined) return console.error(`[COMMAND] ${file} não foi carregado.`);
    if (prop.conf.commands && prop.conf.commands.length > 0) {
        prop.conf.commands.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof (prop.onLoad) == "function") prop.onLoad(client);
    console.log(`[COMANDO] Um total de ${prop.conf.commands.length} suportes foram instalados para ${file}.`);
});
console.log("--------------------------------");
console.log("Carregando eventos...");
fs.readdirSync("./events/", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./events/${file}`);
    client.on(prop.conf.event, prop.execute);
    console.log(`[EVENTO] ${file} foi carregado.`);
});

console.log("--------------------------------");
console.log("| Preparação concluida. Inicializando o bot agora... |");

require("./bot.js");

/*
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
fs.readdir("./commands/signos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/signos/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[True] ${commandName}`);
        client.commands.set(commandName, props);
    });
});
fs.readdir("./commands/stats/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/stats/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[True] ${commandName}`);
        client.commands.set(commandName, props);
    });
});*/
client.login(config.token);