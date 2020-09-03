const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let myGuild = message.guild;
    let memberCount = myGuild.memberCount;
    let date = message.channel.guild.createdAt;

    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
    };
    const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('INFORMAÇÕES DO SERVIDOR')
        .addField('Nome', message.guild.name, true)
        .addField('Criado por', message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator, true)
        .addField('Região', message.guild.region, true)
        .addField('Usuários', memberCount, true)
        .addField('Cargos', message.guild.roles.cache.size, true)
        .addField('Canais', message.guild.channels.cache.size, true)
        .addField('Criação', formatDate('DD/MM/YYYY, às HH:mm:ss', date) + ' | ' + checkDays(date), true)
    message.channel.send(embed);

    function formatDate(template, date) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
        date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
        return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
            return template.split(specs[i]).join(item)
        }, template)
    }
}