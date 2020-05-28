const Discord = require("discord.js");
const config = require("../../config.json");
const moment = require("moment");

exports.run = async (client, message, args) => { 

const fetchquote = require('snekfetch');
        fetchquote.get('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en').then(quote => {
            if (quote.body.quoteText === undefined) {
                return message.reply('Something is messing up the API try again please!');
            }

            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'Um cara inteligente disse:',
                  icon_url: 'http://pngimages.net/sites/default/files/right-double-quotation-mark-png-image-80280.png'
                },
                fields: [{
                    name: "Citação com fonte",
                    value: `"${quote.body.quoteText}"\n**Autor:** ${quote.body.quoteAuthor}\n**Fonte:** ${quote.body.quoteLink}`
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: message.author.tag
                }
            }
        })
    });
}