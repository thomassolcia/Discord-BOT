const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    if (!args[0]) {
        let date = message.author.createdAt;

        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " dia" : " dias") + " atrás";
        };
        const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle("INFORMAÇÕES DE USUÁRIO")
            .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
            .addField('Username/ID', `${message.author.username}#${message.author.discriminator}/${message.author.id}`)
            .addField('Entrou', formatDate('DD/MM/YYYY, às HH:mm:ss', date) + ' | ' + checkDays(date))
        message.channel.send(embed);

        function formatDate(template, date) {
            var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
            date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
            return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
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
                .setColor('BLACK')
                .setTitle("INFORMAÇÕES DE USUÁRIO: " + user.username)
                .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
                .addField('Username/ID', `${user.username}#${user.discriminator}/${user.id}`)
                .addField('Entrou', formatDate('DD/MM/YYYY, às HH:mm:ss', date) + ' | ' + checkDays(date))
            message.channel.send(embed);

            function formatDate(template, date) {
                var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
                date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
                return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
                    return template.split(specs[i]).join(item)
                }, template)
            }
        });
    }
}