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
            .setTimestamp()
            .setFooter(`Comando =dog`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
        message.channel.send(dogembed);
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Este comando não está disponível no momento!`)
            .setDescription("Contate alguém da staff para mais informações.")
            .addField('Erro:', `\`${err}\``)
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =dog`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
        message.channel.send(embed)
    }
}

exports.conf = {
    commands: ["cachorro", "dog"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'dog', 
    description: 'Mostra a imagem ou gif de um cachorro',
    usage: '[=]dog',
    kategori: 'animais'
};