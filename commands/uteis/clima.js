const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()
const weather = require('weather-js')
exports.run = (client, message, args) => {
    if (!args[0]) {
        return message.reply('Você precisa inserir uma localidade para isso. Exemplo: `-clima Alvorada do Sul`')
    } else {
        try {
            weather.find({ search: args.join(' '), degreeType: 'C' }, function (err, result) {
                if (result[0] != undefined) {
                    var current = result[0].current;
                    var forecast = result[0].forecast;
                    var location = result[0].location;
                    for (i = 0; i < 5; i++) {
                        if (forecast[i].day == 'Monday') {
                            forecast[i].day = 'Segunda'
                        }
                        if (forecast[i].day == 'Tuesday') {
                            forecast[i].day = 'Terça'
                        }
                        if (forecast[i].day == 'Wednesday') {
                            forecast[i].day = 'Quarta'
                        }
                        if (forecast[i].day == 'Thursday') {
                            forecast[i].day = 'Quinta'
                        }
                        if (forecast[i].day == 'Friday') {
                            forecast[i].day = 'Sexta'
                        }
                        if (forecast[i].day == 'Saturday') {
                            forecast[i].day = 'Sábado'
                        }
                        if (forecast[i].day == 'Sunday') {
                            forecast[i].day = 'Domingo'
                        }
                        if (forecast[i].precip == '') {
                            forecast[i].precip = 0
                        }
                    }
                    let helpMenu = new Menu(message.channel, message.author.id, [
                        {
                            name: 'main',
                            content: new MessageEmbed({
                                title: `Clima atual em: ${location.name}`,
                                description: `**Dia:** ${current.date} (Hoje)\n**Temperatura:** ${current.temperature} Cº\n**Sensação:** ${current.feelslike} Cº\n**Vento:** ${current.winddisplay}\n**Umidade:** ${current.humidity} %`,
                                timestamp: new Date(),
                                footer: {
                                    icon_url: "https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png",
                                    text: `Comando =clima`
                                }
                            }),
                            reactions: {
                                '⏹': 'delete',
                                '▶': 'extra'
                            }
                        },
                        {
                            name: 'extra',
                            content: new MessageEmbed({
                                title: `Clima semanal em: ${location.name}`,
                                description: `**Dia:** ${forecast[0].date} (${forecast[0].day})\n**Max:** ${forecast[0].high} Cº\n**Min:** ${forecast[0].low} Cº\n**Chuva:** ${forecast[0].precip} %\n\n**Dia:** ${forecast[1].date} (${forecast[1].day})\n**Max:** ${forecast[1].high} Cº\n**Min:** ${forecast[1].low} Cº\n**Chuva:** ${forecast[1].precip} %\n\n**Dia:** ${forecast[2].date} (${forecast[2].day})\n**Max:** ${forecast[2].high} Cº\n**Min:** ${forecast[2].low} Cº\n**Chuva:** ${forecast[2].precip} %\n\n**Dia:** ${forecast[3].date} (${forecast[3].day})\n**Max:** ${forecast[3].high} Cº\n**Min:** ${forecast[3].low} Cº\n**Chuva:** ${forecast[3].precip} %\n\n**Dia:** ${forecast[4].date} (${forecast[4].day})\n**Max:** ${forecast[4].high} Cº\n**Min:** ${forecast[4].low} Cº\n**Chuva:** ${forecast[4].precip} %`,
                                timestamp: new Date(),
                                footer: {
                                    icon_url: "https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png",
                                    text: `Comando =clima`
                                }
                            }),
                            reactions: {
                                '◀': 'first'
                            }
                        }
                    ], 300000)
                    helpMenu.start()

                } else {
                    message.reply('Esta localização não está em meu alcance! Me desculpe.')
                }
            })
        } catch (err) {
            message.channel.send(`Occoreu um erro: \`${err}\``)
        }
    }
}

exports.conf = {
    commands: ["clima", "weather"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'clima',
    description: 'Mostra informações do clima de um local específico',
    usage: '[=]clima',
    kategori: 'uteis'
};