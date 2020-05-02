exports.run = async (client, message, args) => {
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
    };

    const embed = {
        "title": "Informações do Servidor: " + message.guild.name,
        "color": 15359,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/704392967074349087/2a2ae76986efdcdf549d9bd0dcedeafc.png"
        },
        "fields": [
          {
            "name": "ID:",
            "value": message.guild.id
          },
          {
            "name": "Criado por:",
            "value": message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator
          },
          {
            "name": "Região:",
            "value": message.guild.region + " 🇧🇷"
          },
          {
            "name": "Usuários:",
            "value": memberCount,
          },
          {
            "name": "Qtd. Cargos:",
            "value": message.guild.roles.cache.size
          },
          {
            "name": "Qtd. Canais:",
            "value": message.guild.channels.cache.size
          },
          {
            "name": "Nível de Verificação:",
            "value": message.guild.verificationLevel + ' | ' + " É necessário ter uma conta com o e-mail verificado!",
          },
          {
            "name": "Criação:",
            "value": message.channel.guild.createdAt.toUTCString().substr(0, 16) + ' | ' + checkDays(message.channel.guild.createdAt)
          }
        ]
      };
      message.channel.send({ embed });
}