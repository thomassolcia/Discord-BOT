const Discord = require('discord.js');
exports.run = async (client, message, args) => {

	const now = new Date();
	const next = new Date(now);
	next.setFullYear(2020);
	next.setHours(14, 0, 0, 0);
	next.setMonth(05, 22);
	const duration = next - now;
	const seconds = Math.floor((duration / 1000) % 60);
	const minutes = Math.floor((duration / 1000 / 60) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
	const days = Math.floor(duration / (1000 * 60 * 60 * 24));

	const yearembed = new Discord.MessageEmbed()
    .setTitle(`🛍 Game Festival: Summer Edition`)
    .addField('Status:', 'Em andamento')
	.addField(`Tempo restante:`, ` **${days} dias**, **${hours} horas**, **${minutes} minutos** e **${seconds} segundos**`)
	.setColor("BLUE")
	.setTimestamp()
	.setFooter(message.author.tag)
	message.channel.send(yearembed)
};