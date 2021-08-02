const Discord = require("discord.js");
const config = require("../config.json");
require("dotenv").config();
/**
 * @param {Discord.Message} message 
 */
exports.execute = async (message) => {
    try {
        if (message.author.bot || !message.content.startsWith(config.prefix)) return;

        let args = message.content.split(" ");
        let commandName = args[0].substring(config.prefix.length);
        args = args.splice(1);
        let command = global.Commands.get(commandName);
        if (!command || !command.conf.enabled || (command.conf.guildOnly && message.channel.type != "text")) return;
        if (command)
            command.run(message.client, message, args);
    } catch (err) {
        console.log(err)
    }
};
exports.conf = {
    event: "message"
}