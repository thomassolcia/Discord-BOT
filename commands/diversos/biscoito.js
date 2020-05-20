const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!user) return message.channel.send("Não encontrei o usuário mencionado.");
    if(user.id == message.author.id) return message.channel.send("Pare de ser egoísta! Dê um biscoito para alguém.")
    let cookies = [
    'http://i.imgur.com/SLwEY66.gif', 
    'http://i.imgur.com/K6VoNp3.gif', 
    'http://i.imgur.com/knVM6Lb.gif',
    'http://i.imgur.com/P1BMly5.gif', 
    'http://i.imgur.com/I8CrTUT.gif', 
    'https://i.imgur.com/0XTueQR.png',
    'https://i.imgur.com/u9k8x4J.png', 
    'https://i.imgur.com/AUtfHnK.png', 
    'https://i.imgur.com/XjTbrKc.png',
    'https://i.imgur.com/A3mgqEh.png', 
    'https://i.imgur.com/YnkdGZd.png', 
    'https://i.imgur.com/FJsOnOE.png',
    'https://i.imgur.com/RQFPwDg.png', 
    'https://i.imgur.com/vyCTGr0.png', 
    'https://i.imgur.com/kkXToc8.png',
    'https://i.imgur.com/ctHwqVL.png', 
    'https://i.imgur.com/yUaCPvC.png', 
    'https://i.imgur.com/IUM6Z8F.png'
];

const cookembed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`<@${message.author.id}> deu para <@${user.id}> um biscoito! :cookie: `)
.setImage(cookies[Math.floor(Math.random() * cookies.length)])

message.channel.send(cookembed)
}