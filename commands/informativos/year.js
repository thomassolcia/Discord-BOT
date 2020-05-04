const moment = require("moment");

exports.run = async (client, message, args) => {

	const now = new Date();
	const next = new Date(now);
	next.setFullYear(now.getFullYear() + 1);
	next.setHours(0, 0, 0, 0);
	next.setMonth(0, 1);
	const duration = next - now;
	const seconds = Math.floor((duration / 1000) % 60);
	const minutes = Math.floor((duration / 1000 / 60) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
	const days = Math.floor(duration / (1000 * 60 * 60 * 24));
	return message.channel.send({
		embed: {
			color: 'RANDOM',
			title: "Uhuuu, quem vai ficar até o fim do ano sem usar drogas?",
			description: `Faltam **${days} dias**, **${hours} horas**, **${minutes} minutos** e **${seconds} segundos** até **${next.getFullYear()}**! 🎆`,
			footer: {
				text: `Aproximadamente ${moment.duration(next - now).humanize()}.`,
			},
		},
	});
};