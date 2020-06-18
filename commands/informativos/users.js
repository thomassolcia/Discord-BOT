const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.guild.members.fetch().then(fetchedMembers => {
        const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
        const totalAusente = fetchedMembers.filter(member => member.presence.status === 'idle');
        const totalOcupado = fetchedMembers.filter(member => member.presence.status === 'dnd');
        const totalOffline = fetchedMembers.filter(member => member.presence.status === 'offline');

        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTimestamp(new Date())
        .setTitle("Usuários no Servidor: " + message.guild.name)
        .setThumbnail('https://cdn.discordapp.com/avatars/704392967074349087/2a2ae76986efdcdf549d9bd0dcedeafc.png')
        .addField('Usuários', `Atualmente temos ${totalOnline.size + totalAusente.size + totalOcupado.size + totalOffline.size} usuários no servidor.` )
        .addField('Status: Online', `${totalOnline.size} usuários.`)
        .addField('Status: Ausente', `${totalAusente.size} usuários.`)
        .addField('Status: Ocupado', `${totalOcupado.size} usuários.`)
        .addField('Status: Offline', `${totalOffline.size} usuários.`)
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed);

    });
}