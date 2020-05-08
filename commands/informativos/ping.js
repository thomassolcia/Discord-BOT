exports.run = async (client, message) => {
	const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('Pong!\n\nSua latência com o bot: ' + clientms + 'ms');
	message.channel.send(`A Latencia da API é ${Math.floor(client.ws.ping)}ms`);
}

const Discord = require('discord.js');

exports.run = async (client, message) => {
	const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	const tempEmbed = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle('Pong!')
	.addField(`Latência com o BOT`, `${clientms}ms`, true)
	.addField(`Latência com a API`, `${Math.floor(client.ws.ping)}ms`, true)
	ms.delete()
    ms.channel.send(tempEmbed)
}