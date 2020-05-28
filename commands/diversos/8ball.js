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
                return message.reply('O que você deseja me perguntar?\n\**Exemplo:** `=8ball você também acha o Awoone é maravilhoso?`');
            }

        message.channel.send({embed: {
            color: 3447003,
            author: {
            name: `Magic 8-Ball`,
            icon_url: 'http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png'
            },
            fields: [{
                name: 'Sua pergunta',
                value: question
            },
            {
                name: 'Minha resposta',
                value: fortunes[~~(Math.random() * fortunes.length)],
            }
            ],
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: message.author.tag
            }
        }
        });
}