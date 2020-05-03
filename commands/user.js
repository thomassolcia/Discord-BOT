/*exports.run = async (client, message, args) => {
  let date = message.author.createdAt;
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
            "value": formatDate('DD/MM/YYYY, às HH:mm:ss', date) + ' | ' + checkDays(date),
          }
        ]
      };
      message.channel.send({embed});
      function formatDate(template, date) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
        date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
        return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
            return template.split(specs[i]).join(item)
        }, template)
      }
}
*/