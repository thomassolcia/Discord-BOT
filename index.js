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
console.log('\n     [COMANDOS]      \n')
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

fs.readdir("./commands/música/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/música/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} -> ✔️  Pronto!`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);