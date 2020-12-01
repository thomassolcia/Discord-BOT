const Discord = require('discord.js');
exports.run = async (client, message, args) => {
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
            .setTimestamp()
            .setFooter(`Comando =unmute`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        message.channel.send(embed)
    }
}

exports.conf = {
    commands: ["unmute", "desmutar"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'unmute',
    description: 'Desmuta um usuário',
    usage: '[=]unmute',
    kategori: 'staff'
};