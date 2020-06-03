const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const rng = Math.floor((Math.random() * 100) + 1);

    if (args[0] === 'pedra' && rng > 0 && rng <= 34) {
        const embed1 = new Discord.MessageEmbed() 
        .setDescription(`Houve um empate!`)
        .addField('Você:', 'Pedra')
        .addField('Bot:','Pedra')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed1)
    } else if (args[0] === 'pedra' && rng > 34 && rng <= 67) {
        const embed2 = new Discord.MessageEmbed() 
        .setDescription(`Parece que você perdeu!`)
        .addField('Você:', 'Pedra')
        .addField('Bot:','Papel')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed2)
    } else if (args[0] === 'pedra' && rng > 67 && rng <= 100) {
        const embed3 = new Discord.MessageEmbed() 
        .setDescription(`Parece que você me venceu!`)
        .addField('Você:', 'Pedra')
        .addField('Bot:','Tesoura')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed3)
    } else if (args[0] === 'papel' && rng > 0 && rng <= 34) {
        const embed4 = new Discord.MessageEmbed() 
        .setDescription(`Houve um empate!`)
        .addField('Você:', 'Papel')
        .addField('Bot:','Papel')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed4)
    } else if (args[0] === 'papel' && rng > 34 && rng <= 67) {
        const embed5 = new Discord.MessageEmbed() 
        .setDescription(`Parece que você perdeu!`)
        .addField('Você:', 'Papel')
        .addField('Bot:','Tesoura')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed5)
    } else if (args[0] === 'papel' && rng > 67 && rng <= 100) {
        const embed6 = new Discord.MessageEmbed() 
        .setDescription(`Parece que você me venceu!`)
        .addField('Você:', 'Papel')
        .addField('Bot:','Pedra')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed6)
    } else if (args[0] === 'tesoura' && rng > 0 && rng <= 34) {
        const embed7 = new Discord.MessageEmbed() 
        .setDescription(`Houve um empate!`)
        .addField('Você:', 'Tesoura')
        .addField('Bot:','Tesoura')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed7)
    } else if (args[0] === 'tesoura' && rng > 34 && rng <= 67) {
        const embed1 = new Discord.MessageEmbed() 
        .setDescription(`Parece que você perdeu!`)
        .addField('Você:', 'Tesoura')
        .addField('Bot:','`Pedra`')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed1)
    } else if (args[0] === 'tesoura' && rng > 67 && rng <= 100) {
        const embed8 = new Discord.MessageEmbed() 
        .setDescription(`Parece que você me venceu!`)
        .addField('Você:', 'Tesoura')
        .addField('Bot:','Papel')
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed8)
    } else if (args[0] !== 'pedra' || args[0] !== 'papel' || args[0] !== 'tesoura') {
        return message.reply('Por favor, insira `pedra`, `papel` ou `tesoura`.' + `\nVocê inseriu: \`${args[0]}\``);
    }
}