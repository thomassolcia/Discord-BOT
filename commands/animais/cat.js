const Discord = require("discord.js");
const superagent = require("superagent");
exports.run = async(bot, message, args) => {
    try {
        let { body } = await superagent
            .get(`http://aws.random.cat/meow`);
        let catembed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle("GATINHO 🐱")
            .setImage(body.file)
        message.channel.send(catembed);
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Este comando não está disponível no momento!`)
            .setDescription("Contate alguém da staff para mais informações.")
            .addField('Erro:', `\`${err}\``)
            .setColor('BLACK')
        message.channel.send(embed)
    }
}