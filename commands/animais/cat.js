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
            .setTimestamp()
            .setFooter(`Comando =cat`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        message.channel.send(catembed);
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Este comando não está disponível no momento!`)
            .setDescription("Contate alguém da staff para mais informações.")
            .addField('Erro:', `\`${err}\``)
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =cat`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        message.channel.send(embed)
    }
}

exports.conf = {
    commands: ["gato", "cat"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'cat', 
    description: 'Mostra a imagem ou gif de um gato',
    usage: '[=]cat',
    kategori: 'animais'
};