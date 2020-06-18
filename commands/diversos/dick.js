const Discord = require('discord.js');

exports.run = (client, message, args) => {
        
        let dicksize = ["8=D", "8===D", "8=====D","8=======D", "8========D", "8==========D", "404 not found"];
        let dickuser = message.mentions.users.first();

        if (!dickuser) {
            return message.channel.send('Você deve mencionar alguém!\n(Isso tem 100% de precisão!)');
        }
        if (dickuser.id == "280167235878649867") {
            let embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle('📏 Quantos na régua?')
            .setDescription(`O dick do ${args[0]} tem esse tamanho:\n\n8============================================D`)
            .setTimestamp()
            .setFooter(`Medido por: ${message.author.tag}`);
            message.channel.send(embed);
        }

        let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle('📏 Quantos na régua?')
        .setDescription(`O dick do ${args[0]} tem esse tamanho:\n\n${dicksize[~~Math.floor(Math.random() * dicksize.length)]}`)
        .setTimestamp()
        .setFooter(`Medido por: ${message.author.tag}`);
        message.channel.send(embed);
        
}