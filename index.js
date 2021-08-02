require("dotenv").config();
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
//const client = new Discord.Client();
const config = require("./config.json");

console.log("Launching bot...");
let _client = new Discord.Client();

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
fs.readdirSync("./commands/giveaways/", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./commands/giveaways/${file}`);
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
fs.readdir("./eventsReady/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./eventsReady/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});
console.log("--------------------------------");
console.log("| Preparação concluida. Inicializando o bot agora... |");

require("./bot.js");

client.login(config.token);