const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	var time = args[0];
	var reminder = args.splice(1).join(' ');

	if (!time) return message.reply('Não posso te lembrar se você não definir um tempo...');
	if (!reminder) return message.reply('Você esqueceu de inserir uma mensagem!');

	time = await time.toString();
	if (time.indexOf('s') !== -1) { // Seconds
		var timesec = await time.replace(/s.*/, '');
		var timems = await timesec * 1000;
	} else if (time.indexOf('m') !== -1) { // Minutes
		var timemin = await time.replace(/m.*/, '');
		timems = await timemin * 60 * 1000;
	} else if (time.indexOf('h') !== -1) { // Hours
		var timehour = await time.replace(/h.*/, '');
		timems = await timehour * 60 * 60 * 1000;
	} else if (time.indexOf('d') !== -1) { // Days
		var timeday = await time.replace(/d.*/, '');
		timems = await timeday * 60 * 60 * 24 * 1000;
	} else {
		return message.reply('O tempo deve ser númerico [s/m/h/d]');
	}
	message.reply(`Lembrarei você de \`${reminder}\` daqui \`${time}\` em seu chat privado!`).then(msg =>{
		msg.delete({timeout: 5000})
	});
	setTimeout(function () {
		const embed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setTitle('✉️ Lembrete')
			.setDescription('Você me pediu para te lembrar de algo...')
			.addField(`A fazer:`, reminder)
		message.author.send(embed)
	}, parseInt(timems));
};