const Discord = require("discord.js")
var imgur = require("imgur")
imgur.setAPIUrl('https://api.imgur.com/3/');
imgur.getAPIUrl();
exports.run = (bot, message, args) => {
	if(message.attachments.size < 1) {
		message.channel.send('Você deve fazer upload de uma imagem.')
	} else {
		if(message.attachments.first().url.endsWith('png') || message.attachments.first().url.endsWith('jpg') || message.attachments.first().url.endsWith('gif')) {
			imgur.uploadUrl(message.attachments.first().url).then(function (json) {
				message.channel.send('A imagem foi enviada: ' + json.data.link)
			}).catch(function (err) {
				message.channel.send('Aconteceu um erro, tente novamente.')
			})
		} else {
			message.channel.send('Só são suportados arquivos png, jpg e gif.')
		}
	}
}