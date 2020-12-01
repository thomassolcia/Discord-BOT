const Discord = require('discord.js');
const cheerio = require('cheerio')
const axios = require('axios')
exports.run = async(client, message, args) => {
    try {
        const fetchData = async(url) => {
            const result = await axios.get(url)
            return result.data
        }
        const content = await fetchData(`https://www.remessaonline.com.br/cotacao/cotacao-dolar`)
        const $ = cheerio.load(content)
        const content2 = await fetchData(`https://www.remessaonline.com.br/cotacao/cotacao-euro`)
        const $2 = cheerio.load(content2)
        $('div.style__Text-sc-27fg4f-2.ddwOcG').each((i, el) => {
            $2('div.style__Text-sc-27fg4f-2.ddwOcG').each((i, e) => {
                cotDolar = $(el).text()
                cotEuro = $2(e).text()
                const dolarEmbed = new Discord.MessageEmbed()
                    .setTitle(`COTAÇÃO HOJE`)
                    .addField('💸 DOLAR:', `R$ ${cotDolar}`, true)
                    .addField('💸 EURO:', `R$ ${cotEuro}`, true)
                    .setColor("BLACK")
                message.channel.send(dolarEmbed)
            })
        })
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`[BETA] Não foi possível obter as informações.`)
            .setDescription("**Veja abaixo possíveis motivos:**\n\n- Erro de requisição. (Tente novamente)\n- Site base fora do ar.")
            .addField('Erro:', `\`${err}\``)
            .setColor("BLACK")
            .setTimestamp()
            .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        message.channel.send(embed)
    }
}

exports.conf = {
    commands: ["cotacao", "dol"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'cotacao',
    description: 'Mostra informações do dolar/euro',
    usage: '[=]cotacao',
    kategori: 'uteis'
};