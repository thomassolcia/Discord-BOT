const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

  try{
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Doguinhos :dog:")
    .setImage(body.url)
    .setTimestamp()
    .setFooter(message.author.tag);
    message.channel.send(dogembed);
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