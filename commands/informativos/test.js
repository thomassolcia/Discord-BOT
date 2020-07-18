const Discord = require('discord.js');

exports.run = async (client, message) => {
const msg = await message.channel.send("Beep");
msg.edit("Boop");
msg.react("👋")
}