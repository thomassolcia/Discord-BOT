const Discord = require('discord.js')
exports.run = async(client, message, args) => {
    message.delete()
    const member = message.mentions.users.first() || client.users.cache.get(args[0]);
    const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(member.displayAvatarURL())
        .setDescription(`O usuário ${member} foi expulso!`)
        .addField("Staff", message.author.username, true)
    const embedErr = new Discord.MessageEmbed()
        .setTitle(`Este comando não existe ou o formato está incorreto.`)
        .setDescription("Digite `-ajuda` para mais informações!")
        .addField('Uso correto do comando:', `\`-kick <@user>\``)
        .setColor("RED")
    const embedPermissoes = new Discord.MessageEmbed()
        .setTitle(`Você não tem permissões para executar esse comando.`)
        .setDescription("Digite `-ajuda` para mais informações!")
        .setColor("RED")

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