/*exports.run = (client, message, args) => {
    message.guild.members.fetch().then(fetchedMembers => {
        const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
        const totalAusente = fetchedMembers.filter(member => member.presence.status === 'idle');
        const totalOcupado = fetchedMembers.filter(member => member.presence.status === 'dnd');
        const totalOffline = fetchedMembers.filter(member => member.presence.status === 'offline');

            const embed = {
                "title": "Usuários no Servidor: " + message.guild.name,
                "color": 15359,
                "thumbnail": {
                "url": "https://cdn.discordapp.com/avatars/704392967074349087/2a2ae76986efdcdf549d9bd0dcedeafc.png"
                },
                "fields": [
                {
                    "name": "Usuários:",
                    "value": `Atualmente temos ${totalOnline.size + totalAusente.size + totalOcupado.size + totalOffline.size} usuários no servidor.` 
                },
                {
                    "name": "Status: Online",
                    "value":  `${totalOnline.size} usuários.`
                },
                {
                    "name": "Status: Ausente",
                    "value":  `${totalAusente.size} usuários.`
                },
                {
                    "name": "Status: Ocupado",
                    "value":  `${totalOcupado.size} usuários.`
                },
                {
                    "name": "Status: Offline",
                    "value":  `${totalOffline.size} usuários.`
                }
                ]
            };
            message.channel.send({embed});
        
    });
}*/