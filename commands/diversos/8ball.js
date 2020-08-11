const Discord = require("discord.js");
const moment = require("moment");

var fortunes = [
    "Sim",
    "Não",
    "Talvez",
    "Estou pensando aqui... pergunte novamente",
    "Às vezes",
    "É...",
    "De jeito nenhum!",
    "Pra caralho!",
    "Não... não mesmo"
];

exports.run = async (client, message, args) => {

    let question = message.content.split(' ').slice(1).join(' ');

    if (!question) {
        return message.reply('O que você deseja me perguntar?\n\**Exemplo:** `-8ball você também acha o Awoone é maravilhoso?`');
    }

    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle('🎱 Magic 8-Ball')
    .addField('Sua pergunta', question)
    .addField('Minha resposta', fortunes[~~(Math.random() * fortunes.length)])
    .setTimestamp()
    .setFooter(message.author.tag);
    message.channel.send(embed);

}