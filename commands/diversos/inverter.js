const Discord = require('discord.js')
const c = require('../../config.json')

exports.run = async (client, message, args) => {
    try {
      if (!args[0]) return message.reply('Você precisa inserir o texto para reverter!');
      const str = args.join(' ');

      const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .addField(`Original:`, args[0])
      .addField(`Invertida:`, (str.split('').reverse().join('')))
      .setFooter(message.author.tag)
      .setTimestamp()
      message.channel.send(embed)

    } catch (err) {
      message.channel.send('Aconteceu um erro!\n' + err).catch();
    }
  };