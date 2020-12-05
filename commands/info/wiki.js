const Discord = require('discord.js');
const cheerio = require('cheerio')
const axios = require('axios')
exports.run = async (client, message, args) => {
    var d = new Date();
    mes = d.getMonth() + 1;
    if (mes == 1) {
        mes = 'janeiro'
    } else if (mes == 2) {
        mes = 'fevereiro'
    } else if (mes == 3) {
        mes = 'março'
    } else if (mes == 4) {
        mes = 'abril'
    } else if (mes == 5) {
        mes = 'maio'
    } else if (mes == 6) {
        mes = 'junho'
    } else if (mes == 7) {
        mes = 'julho'
    } else if (mes == 8) {
        mes = 'agosto'
    } else if (mes == 9) {
        mes = 'setembro'
    } else if (mes == 10) {
        mes = 'outrubro'
    } else if (mes == 11) {
        mes = 'novembro'
    } else if (mes == 12) {
        mes = 'dezembro'
    }

    try {
        const fetchData = async (url) => {
            const result = await axios.get(url)
            return result.data
        }
        const content = await fetchData(`https://pt.wikipedia.org/wiki/${d.getDate()}_de_${mes}`)
        const $ = cheerio.load(content)
        title = $('p').eq(0).text()
        fato = $('ul > li').eq(Math.floor(Math.random() * 30) + 20).text()
        if (fato.includes('—')) {
            const dolarEmbed = new Discord.MessageEmbed()
                .setTitle(`${title.split("(")[0]}`)
                .setDescription(`**Fato Histórico Aleatório**\n${d.getDate()} de ${mes} de ${fato}`)
                .setColor("BLACK")
                .setFooter(title.split(").")[1], `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
                .setTimestamp()
            message.channel.send(dolarEmbed)
        } else {
            fato = $('ul > li').eq(Math.floor(Math.random() * 30) + 20).text()
            const dolarEmbed = new Discord.MessageEmbed()
                .setTitle(`${title.split("(")[0]}`)
                .setDescription(`**Fato Histórico Aleatório**\n${d.getDate()} de ${mes} de ${fato}`)
                .setColor("BLACK")
                .setFooter(title.split(").")[1], `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
                .setTimestamp()
            message.channel.send(dolarEmbed)
        }
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`[BETA] Não foi possível obter as informações.`)
            .setDescription("**Veja abaixo possíveis motivos:**\n\n- Erro de requisição. (Tente novamente)\n- Site base fora do ar.")
            .addField('Erro:', `\`${err}\``)
            .setColor("BLACK")
            .setTimestamp()
            .setFooter(`Comando =wiki`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
        message.channel.send(embed)
    }
}

exports.conf = {
    commands: ["wiki", "historia"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'wiki', 
    description: 'Mostra um fato aleatório sobre o dia de hoje',
    usage: '[=]wiki',
    kategori: 'info'
};