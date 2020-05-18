const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Gatíneos 🐱")
  .setImage(body.file);

  message.channel.send(catembed);
}