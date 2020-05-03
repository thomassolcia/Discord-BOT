const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!user) return message.channel.send("Não encontrei o usuário mencionado.");

    let cookies = [
    'https://media.giphy.com/media/MlMl5tEnohzZm/giphy.gif'
];

const cookembed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`<@${message.author.id}> deu um tapa em <@${user.id}>`)
.setImage(cookies[Math.floor(Math.random() * cookies.length)])

message.channel.send(cookembed)
   
}