const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg => msg.delete(8000))
    } else {
        if (!args[1]) {
            let member = message.mentions.members.first();
            const user = message.mentions.users.first();
            member.voice.setMute(true);
            const embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setThumbnail(user.displayAvatarURL())
                .setDescription(`O usuário ${member} foi mutado por tempo indefinido!`)
                .addField("Staff", message.author.username, true)
            message.channel.send(embed)
        } else {
            var segundos = args[1];
            let member = message.mentions.members.first();
            const user = message.mentions.users.first();
            member.voice.setMute(true);
            const embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setThumbnail(user.displayAvatarURL())
                .setDescription(`O usuário ${member} foi mutado por ${segundos} segundos!`)
                .addField("Staff", message.author.username, true)
            message.channel.send(embed).then(msg => msg.delete({ timeout: `${segundos}` * 1000 }))
            setTimeout(() => { member.voice.setMute(false) }, `${segundos}` * 1000);
        }

    }
}