const fetch = require("node-fetch");
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

    fetch(`https://catfact.ninja/fact`)
    .then(res => res.json())
    .then(data => {
      let fatos = data.fact;
      const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTimestamp(new Date())
      .setAuthor("🐱 Fatos sobre os gatos")
      .setDescription(fatos)
      .setTimestamp()
      .setFooter(message.author.tag);
      message.channel.send(embed);
    });
}