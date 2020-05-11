const superagent = require("snekfetch");
const Discord = require("discord.js");
const rp = require('request-promise-native');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) {
        message.react('💢');
    } else {
      return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
        return rp.get({
            url:'http://media.oboobs.ru/' + res[0].preview,
            encoding: null
        });
    }).then(function(res)   {
    const lewdembed = new Discord.MessageEmbed()
          .setFooter("Tags: Boobs")
          .setColor(`#000000`)
          .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
        message.channel.send(lewdembed);
    });
  }
};