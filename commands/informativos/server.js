const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    let date = message.channel.guild.createdAt;
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
    };
    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTimestamp(new Date())
    .setTitle("Informações do Servidor: " + message.guild.name)
    .setThumbnail('https://cdn.discordapp.com/avatars/704392967074349087/2a2ae76986efdcdf549d9bd0dcedeafc.png')
    .addField('ID', message.guild.id)
    .addField('Criado por', message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator)
    .addField('Região', message.guild.region)
    .addField('Usuários', memberCount)
    .addField('Qtd. Cargos', message.guild.roles.cache.size)
    .addField('Qtd. Canais', message.guild.channels.cache.size)
    .addField('Nível de verificação', message.guild.verificationLevel + ' | ' + " Todos são bem-vindos em nosso servidor!")
    .addField('Criação', formatDate('DD/MM/YYYY, às HH:mm:ss', date) + ' | ' + checkDays(date))
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
}