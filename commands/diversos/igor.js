const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let igor = [
    'https://i.imgur.com/Qf0TGS4.gif',
    'https://i.imgur.com/XMtjIED.png', 
    'https://i.imgur.com/ce8DKTF.png', 
    'https://i.imgur.com/ERIxAtp.png',
    'https://i.imgur.com/CGn88XO.png', 
    'https://i.imgur.com/z72jJKL.png',
    'https://i.imgur.com/Virvil2.jpg'
];

const cookembed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`Pinscher Malvoso, ele mesmo!`)
.setImage(igor[Math.floor(Math.random() * igor.length)])
.setTimestamp()
.setFooter(message.author.tag);
message.channel.send(cookembed)
}