const Discord = require('discord.js')
exports.run = async(client, message, args) => {
    const member = message.mentions.users.first() || client.users.cache.get(args[0]);
    const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(member.displayAvatarURL())
        .setDescription(`O usuário ${member} foi banido!`)
        .addField("Staff", message.author.username, true)
        .setTimestamp()
        .setFooter(`Comando =ban`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
    const embedErr = new Discord.MessageEmbed()
        .setTitle(`Este comando não existe ou o formato está incorreto.`)
        .setDescription("Digite `-ajuda` para mais informações!")
        .addField('Uso correto do comando:', `\`-ban <@user>\``)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Comando =ban`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
    const embedPermissoes = new Discord.MessageEmbed()
        .setTitle(`Você não tem permissões para executar esse comando.`)
        .setDescription("Digite `-ajuda` para mais informações!")
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Comando =ban`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)

    if (!member) {
        return message.channel.send(embedErr)
    }
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(embedPermissoes)
    }
    return message.guild.members.ban(member)
        .then(() => message.channel.send(embed))
        .catch(err => message.channel.send(embedErr));
}

exports.conf = {
    commands: ["ban", "banir"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'ban', 
    description: 'Bane um usuário',
    usage: '[=]ban',
    kategori: 'staff'
};