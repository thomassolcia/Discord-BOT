require("dotenv").config();
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

client.queue = new Map();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
console.log('\n     [COMANDOS]      \n')
fs.readdir("./commands/animais/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/animais/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} -> ✔️  Pronto!`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/diversos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/diversos/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} -> ✔️  Pronto!`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/informativos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/informativos/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} -> ✔️  Pronto!`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/minigames/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/minigames/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} -> ✔️  Pronto!`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/staff/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/staff/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} -> ✔️  Pronto!`);
    client.commands.set(commandName, props);
  });
});

fs.readdir(__dirname + "/commands/musica/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/musica/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});

client.login(config.token);