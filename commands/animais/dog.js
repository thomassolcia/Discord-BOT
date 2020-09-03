const Discord = require("discord.js");
const superagent = require("superagent");
exports.run = async(bot, message, args) => {
    try {
        let { body } = await superagent
            .get(`https://random.dog/woof.json`);
        let dogembed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle("DOGUINHO :dog:")
            .setImage(body.url)
        message.channel.send(dogembed);
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Este comando não está disponível no momento!`)
            .setDescription("Contate alguém da staff para mais informações.")
            .addField('Erro:', `\`${err}\``)
            .setColor('BLACK')
        message.channel.send(embed)
    }
}