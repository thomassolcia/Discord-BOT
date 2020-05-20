const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

   let dogembed = new Discord.MessageEmbed()
   .setColor("GREEN")
   .setTitle("Doguinhos :dog:")
   .setImage(body.url);

   message.channel.send(dogembed);

}