const Discord = require("discord.js");
const options = [
    '🇦',
    '🇧',
    '🇨',
    '🇩',
    '🇪',
    '🇫',
    '🇬',
    '🇭',
    '🇮',
    '🇯',
    '🇰',
    '🇱',
    '🇲',
    '🇳',
    '🇴',
    '🇵',
    '🇶',
    '🇷',
    '🇸',
    '🇹',
    '🇺',
    '🇻',
    '🇼',
    '🇽',
    '🇾',
    '🇿',
];
exports.run = async(bot, message, args) => {
        message.delete();
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg => msg.delete(8000))
        if (!args[0]) return message.channel.send('Usage: \`-poll <Minutos> <Titulo> <"Opção-A"> ... <"Opção-X">\`').then(k => k.delete({ timeout: 5000 }));
        if (!args[1]) return message.channel.send('Usage: \`-poll <Minutos> <Titulo> <"Opção-A"> ... <"Opção-X">\`').then(k => k.delete({ timeout: 5000 }));
        if (!args[2]) return message.channel.send('Usage: \`-poll <Minutos> <Titulo> <"Opção-A"> ... <"Opção-X">\`').then(k => k.delete({ timeout: 5000 }));
        if (!args[3]) return message.channel.send('Usage: \`-poll <Minutos> <Titulo> <"Opção-A"> ... <"Opção-X">\`').then(k => k.delete({ timeout: 5000 }));
        try {
            var hours = args[0];
            var cooldown = (hours * 60)
            let question = [];

            for (let i = 1; i < args.length; i++) {
                if (args[i].startsWith('"')) break;
                else question.push(args[i]);
            }
            question = question.join(' ');
            const choices = [];
            const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
            let match;
            while (match = regex.exec(args.join(' '))) choices.push(match[2]);
            let content = [];
            let content2 = [];
            for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
            for (let i = 0; i < choices.length; i++) content2.push(`${options[i]} ${choices[i]}`);
            content = content.join('\n');
            content2 = content2.join(' | ');
            if (!content) return message.channel.send('Você precisa colocar no mínimo duas opções. Uso: \`-poll <Minutos> <Titulo> <"Opção-A"> ... <"Opção-X">\`').then(k => k.delete({ timeout: 5000 }));
            var embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`**${question}**`)
                .setDescription(`${content}\n\nHost: <@${message.author.id}>`)
                .setFooter(`Tempo restante: ${hours} minutos (${cooldown} segundos)`)
            await message.channel.send(embed).then(async m => {
                        for (let i = 0; i < choices.length; i++) await m.react(options[i]);
                        refreshIntervalId = setInterval(() => {
                                    var embed = new Discord.MessageEmbed()
                                        .setColor('RED')
                                        .setTitle(`**${question}**`)
                                        .setDescription(`${content}\n\nHost: <@${message.author.id}>`)
                                        .setFooter(`Tempo restante: ${(hours=hours-0.085714286).toFixed(2)} minutos (${cooldown=cooldown-5} segundos)`)
                                    m.edit(embed)
                                    if (cooldown < 0 || hours < 0) {
                                        var i = ['A', 'B', 'C', 'D', 'E', 'F'];
                                        var a = 0;
                                        var b = 0;
                                        var embed = new Discord.MessageEmbed()
                                            .setColor('RED')
                                            .setAuthor('RESUMO')
                                            .setTitle(`**${question}**`)
                                            .setDescription(`${m.reactions.cache.map(g => `${options[a++]} ${choices[b++]} (${g.count} votos)`).join(`\n`)}\n\nHost: <@${message.author.id}>`)
                                        .setFooter(`Votação encerrada!`)
                                        m.edit(embed)
                return clearInterval(refreshIntervalId);
            }
        }, 5000)
    })
    }catch(err){
        return(console.log(err))
    }
}