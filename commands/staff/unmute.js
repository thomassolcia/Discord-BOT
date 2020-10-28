const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg => msg.delete(8000))
    } else {
        let member = message.mentions.members.first();
        const user = message.mentions.users.first();
        member.voice.setMute(false);
        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setThumbnail(user.displayAvatarURL())
            .setDescription(`O usuário ${member} foi desmutado!`)
            .addField("Staff", message.author.username, true)
        message.channel.send(embed)
    }
}