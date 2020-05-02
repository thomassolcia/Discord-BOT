exports.run = async (client, message, args) => {
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };

    const embed = {
        "title": "Informações do Servidor: " + message.guild.name,
        "color": 15359,
        "fields": [
          {
            "name": "ID:",
            "value": message.guild.id
          },
          {
            "name": "Owner:",
            "value": message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator
          },
          {
            "name": "Region:",
            "value": "🇧🇷 " + message.guild.region
          },
          {
            "name": "Usuários:",
            "value": memberCount,
          },
          {
            "name": "Sobrecarga:",
            "value": message.guild.verificationLevel,
          },
          {
            "name": "Criação:",
            "value": message.channel.guild.createdAt.toUTCString().substr(0, 16) + ' | ' + checkDays(message.channel.guild.createdAt)
          }
        ]
      };
      message.channel.send({ embed });
}