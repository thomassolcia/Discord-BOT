const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const cheerio = require('cheerio')
const axios = require('axios')

    const fetchData = async(url) => {
        const result = await axios.get(url)
        return result.data
    }
    
    const main = async () => {
        const content = await fetchData(`https://br.investing.com/currencies/usd-brl`)
        const $ = cheerio.load(content)
    
        $('div.top.bold.inlineblock').each((i, e) => {
            var cotAtual = $(e).find('.arial_26.inlineblock.pid-2103-last').text();
            var state = $(e).find('.arial_20.greenFont.pid-2103-pc').text();
            var state2 = $(e).find('.arial_20.greenFont.pid-2103-pcp.parentheses').text();
            var cotAnterior = cotAtual-state
            
    
            const steamEmbed = new Discord.MessageEmbed()
            .setTitle(`💸 Cotação do Dolar`)
            .addField('Valor:', `R$ ${cotAtual}`, true)
            .addField('⇅', state, true)
            .addField('%', state2, true)
            .setColor("BLUE")
            message.channel.send(steamEmbed)
    
        })
    }
    main()
}