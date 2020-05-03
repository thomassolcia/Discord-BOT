const Discord = require('discord.js');
exports.run = async (client, message, args) => {
	
	if(!message.member.roles.cache.find(r => r.name === 'OWNERS' || r.name === 'PARTNERS')) return message.channel.send('Para criar votações é necessário ser OWNER ou PARTNER');

	if(!args[0]) return message.channel.send('Uso correto: =vote [Questão]');
	
	const embed = new Discord.MessageEmbed()
	.setColor(15359)
	.setFooter('Reaja com um emoji.')
	.setDescription(args.join(' '))
	.setTitle('Votação criada por: ' + message.author.username);

	let msg = await message.channel.send(embed);

	await msg.react('👍');
	await msg.react('👎');
	message.delete({timeout: 1000})
}