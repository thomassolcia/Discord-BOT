exports.run = (client, message, args) => {
    let botAvatar = client.user.displayAvatarURL
    let date = client.user.createdAt
    let userName = client.user.username

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;

    const embed = {
        "title": 'Informações sobre: ' + userName,
        "color": 15359,
        "thumbnail": {
          "url": botAvatar
        },
        "fields": [
          {
            "name": "Nome: ",
            "value": userName
          },
          {
            "name": "Uptime: ",
            "value": uptime
          },
          {
            "name": "Criado: ",
            "value": formatDate('DD/MM/YYYY, às HH:mm:ss', date)
          }
        ]
      };
      message.channel.send({embed});
    }
    function formatDate(template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
    }, template)
}