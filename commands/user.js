exports.run = async (client, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
    };

    const embed = {
        "title": "Informações do usuário: " + message.author.username,
        "color": 15359,
        "thumbnail": {
          "url": message.author.displayAvatarURL({ format: "png", dynamic: true })
        },
        "fields": [
          {
            "name": "ID:",
            "value": message.author.username + "#" + message.author.discriminator
          },
          {
            "name": "Entrou:",
            "value": message.author.createdAt.toUTCString().substr(0, 16) + ' | ' + checkDays(message.author.createdAt),
          }
        ]
      };
      message.channel.send({embed});
}
