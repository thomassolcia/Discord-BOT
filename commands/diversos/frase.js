const Discord = require("discord.js");
const config = require("../../config.json");
const moment = require("moment");

exports.run = async (client, message, args) => { 

const fetchquote = require('snekfetch');
        fetchquote.get('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en').then(quote => {
            if (quote.body.quoteText === undefined) {
                return message.reply('Something is messing up the API try again please!');
            }

            let embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor('Um cara inteligente disse:', 'http://pngimages.net/sites/default/files/right-double-quotation-mark-png-image-80280.png')
            .addField('Citação com fonte', `"${quote.body.quoteText}"\n**Autor:** ${quote.body.quoteAuthor}\n**Fonte:** ${quote.body.quoteLink}`)
            .setTimestamp()
            .setFooter(`${message.author.tag}`);
            message.channel.send(embed);

    });
}