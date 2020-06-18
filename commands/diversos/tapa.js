const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    if(!user) {
        message.channel.send("Não encontrei o usuário mencionado.");
    }else if(user.id == message.author.id){
        let cookies = [
            'https://media1.tenor.com/images/47c9d9a83e10ef270602bcc9d774edf5/tenor.gif'
        ];
        const cookembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<@${message.author.id}> deu tapa em sí mesmo!`)
        .setImage(cookies[Math.floor(Math.random() * cookies.length)])
        .setTimestamp()
        .setFooter(message.author.tag);
        message.channel.send(cookembed)
    }else{
        let cookies = [
            'https://media.giphy.com/media/MlMl5tEnohzZm/giphy.gif',
            'https://media.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
            'https://4.bp.blogspot.com/-V4dYJG3-eDk/T5TOwNgFKCI/AAAAAAAAB58/_-VtPgJL3TM/s1600/she+slaped+the+black+off+him_f02fd2_2886843.gif',
            'https://media.giphy.com/media/cf8wLYdRWjM6A/giphy.gif',
            'https://forgifs.com/gallery/d/197055-1/Politician-slaps-child.gif',
            'https://thumbs.gfycat.com/BetterAlarmedGroundbeetle-size_restricted.gif',
            'https://i.pinimg.com/originals/9b/52/cf/9b52cf768586939dc48e0e145ae727a8.gif'
        ];
        const cookembed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<@${message.author.id}> deu um tapa em <@${user.id}>`)
        .setImage(cookies[Math.floor(Math.random() * cookies.length)])
        .setTimestamp()
        .setFooter(message.author.tag);
        message.channel.send(cookembed1)
    }
}