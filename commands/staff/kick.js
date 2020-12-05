const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    message.delete()
    const member = message.mentions.users.first() || client.users.cache.get(args[0]);
    const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(member.displayAvatarURL())
        .setDescription(`O usuário ${member} foi expulso!`)
        .addField("Staff", message.author.username, true)
        .setTimestamp()
        .setFooter(`Comando =kick`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
    const embedErr = new Discord.MessageEmbed()
        .setTitle(`Este comando não existe ou o formato está incorreto.`)
        .setDescription("Digite `-ajuda` para mais informações!")
        .addField('Uso correto do comando:', `\`-kick <@user>\``)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Comando =kick`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
    const embedPermissoes = new Discord.MessageEmbed()
        .setTitle(`Você não tem permissões para executar esse comando.`)
        .setDescription("Digite `-ajuda` para mais informações!")
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Comando =kick`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)

    if (!member) {
        return message.channel.send(embedErr)
    }
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(embedPermissoes)
    }
    return message.guild.members.ban(member)
        .then(() => message.channel.send(embed))
        .catch(err => message.channel.send(embedErr));
}

exports.conf = {
    commands: ["kick", "expulsar"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'kick',
    description: 'Expulsa um usuário',
    usage: '[=]kick',
    kategori: 'staff'
};