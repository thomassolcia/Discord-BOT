const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var coin = Math.floor(Math.random() * 20);
    
    const coroaEmbed = new Discord.MessageEmbed() 
        .setDescription(`<@${message.author.id}> Jogou a moeda e caiu...`)
        .setImage('https://media.giphy.com/media/10bv4HhibS9nZC/giphy.gif')
        .addField('Lado', 'Coroa!')
        .setColor("ORANGE")
        .setFooter(message.author.tag)
        .setTimestamp()
    if (coin % 3 !== 0)
        message.channel.send(coroaEmbed)
    
    const caraEmbed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> Jogou a moeda e caiu...`)
        .setImage('https://media.giphy.com/media/10bv4HhibS9nZC/giphy.gif')
        .addField('Lado', 'Cara!')
        .setColor("ORANGE")
        .setFooter(message.author.tag)
        .setTimestamp()
    if (coin % 3 === 0)
        message.channel.send(caraEmbed)
    
}