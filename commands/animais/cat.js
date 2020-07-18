const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

  try{
    let{body} = await superagent
    .get(`http://aws.random.cat/meow`);

    let catembed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Gatíneos 🐱")
    .setImage(body.file)
    .setTimestamp()
    .setFooter(message.author.tag);
    message.channel.send(catembed);
  }catch(err){
    const embed = new Discord.MessageEmbed() 
    .setTitle(`Este comando não está disponível no momento!`)
    .setDescription("Contate alguém da staff para mais informações.")
    .addField('Erro:',`\`${err}\``)
    .setColor("PURPLE")
    .setTimestamp()
    .setFooter(message.author.tag)
    message.channel.send(embed)
  }
}