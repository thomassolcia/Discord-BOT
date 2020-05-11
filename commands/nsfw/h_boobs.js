const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "tits",
  category: "nsfw",
description: "",
run: async (client, message, args, level) => {
//command
if (!message.channel.nsfw) return message.react('💢');
superagent.get('https://nekos.life/api/v2/img/boobs')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`Tags: Tits`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};