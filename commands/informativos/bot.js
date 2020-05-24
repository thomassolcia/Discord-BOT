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

    if (days < 1){
      dias = 'dias'
    }else if (days < 2){
      dias = 'dia'
    }else
      dias = 'dias'

    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " dia" : " dias") + " atrás";
  };

  if (days < 1){
    uptempo = `${hours}h:${minutes}m:${seconds.toFixed(0)}s`;
  }else if (days < 2){
    uptempo = (`${days} dia`);
  }else
    uptempo = (`${days} dias`);

    const embed = {
        "title": 'Informações sobre: ' + userName,
        "color": "BLUE",
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/704392967074349087/2a2ae76986efdcdf549d9bd0dcedeafc.png"
        },
        "fields": [
          {
            "name": "Nome: ",
            "value": userName
          },
          {
            "name": "Uptime: ",
            "value": uptempo
          },
          {
            "name": "Criado: ",
            "value": formatDate('DD/MM/YYYY, às HH:mm:ss', date) + ' | ' + checkDays(date)
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