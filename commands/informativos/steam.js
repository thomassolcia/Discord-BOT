const Discord = require('discord.js');
exports.run = async (client, message, args) => {

	const now = new Date();
	const next = new Date(now);
	next.setUTCFullYear(2020);
	next.setUTCHours(17, 0, 0, 0);
	next.setUTCMonth(09, 29);
	const duration = next - now;
	const seconds = Math.floor((duration / 1000) % 60);
	const minutes = Math.floor((duration / 1000 / 60) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
	const days = Math.floor(duration / (1000 * 60 * 60 * 24));
	const yearembed = new Discord.MessageEmbed()
		.setTitle(`🛍 Halloween Sale 2020`)
		.addField('Status:', 'Em Breve')
		.addField(`Começa em:`, ` **${days} dias**, **${hours} horas**, **${minutes} minutos** e **${seconds} segundos**`)
		.setColor("BLUE")
		.setTimestamp()
		.setFooter(message.author.tag)
	message.channel.send(yearembed)
};