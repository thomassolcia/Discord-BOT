const Discord = require('discord.js');
exports.run = async(client, message) => {
    const ms = await message.channel.send("Ping?");
    const clientms = ms.createdTimestamp - message.createdTimestamp;
    const tempEmbed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('Pong!')
        .addField(`Bot`, `${clientms}ms`, true)
        .addField(`API`, `${Math.floor(client.ws.ping)}ms`, true)
    ms.delete()
    ms.channel.send(tempEmbed)
}