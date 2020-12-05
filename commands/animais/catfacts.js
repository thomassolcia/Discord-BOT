const fetch = require("node-fetch");
const Discord = require('discord.js');

exports.run = async(bot, message, args) => {

    fetch(`https://catfact.ninja/fact`)
        .then(res => res.json())
        .then(data => {
            let fatos = data.fact;
            const embed = new Discord.MessageEmbed()
                .setColor('BLACK')
                .setAuthor("🐱 Está aqui um fato sobre os gatos")
                .setDescription(fatos)
                .setTimestamp()
                .setFooter(`Comando =catfacts`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            message.channel.send(embed);
        });
}

exports.conf = {
    commands: ["gatofatos", "catfacts"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'cat', 
    description: 'Mostra um fato aleatório sobre gatos',
    usage: '[=]catfacts',
    kategori: 'animais'
};