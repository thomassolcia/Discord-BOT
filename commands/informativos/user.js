const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if (!args[0]) {
    let date = message.author.createdAt;
    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " dia" : " dias") + " atrás";
    };
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTimestamp(new Date())
      .setTitle("Informações do Usuário: " + message.author.username)
      .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
      .addField('ID', message.author.username + "#" + message.author.discriminator)
      .addField('Entrou', formatDate('DD/MM/YYYY, às HH:mm:ss', date) + ' | ' + checkDays(date))
      .setTimestamp()
      .setFooter(message.author.tag);
    message.channel.send(embed);
    function formatDate(template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
      return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
      }, template)
    }
  } else {
    auth = message.mentions.users.map(user => {
      let date = user.createdAt;
      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
      };
      const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTimestamp(new Date())
        .setTitle("Informações do Usuário: " + user.username)
        .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
        .addField('ID', user.username + "#" + user.discriminator)
        .addField('Entrou', formatDate('DD/MM/YYYY, às HH:mm:ss', date) + ' | ' + checkDays(date))
        .setTimestamp()
        .setFooter(message.author.tag);
      message.channel.send(embed);
      function formatDate(template, date) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
        date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
        return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
          return template.split(specs[i]).join(item)
        }, template)
      }
    });
  }
}