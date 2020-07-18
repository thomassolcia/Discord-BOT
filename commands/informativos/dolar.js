const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const cheerio = require('cheerio')
    const axios = require('axios')

    try{
        const fetchData = async(url) => {
            const result = await axios.get(url)
            return result.data
        }
        const content = await fetchData(`https://www.remessaonline.com.br/cotacao/cotacao-dolar`)
        const $ = cheerio.load(content)
        $('div.style__Text-sc-27fg4f-2.ddwOcG').each((i, e) => {
            cotAtual = $(e).text()
            const dolarEmbed = new Discord.MessageEmbed()
            .setTitle(`💸 Cotação do Dolar`)
            .addField('Valor:', `R$ ${cotAtual}`, true)
            .setColor("BLUE")
            message.channel.send(dolarEmbed)
        })
    }catch(err){
        const embed = new Discord.MessageEmbed() 
        .setTitle(`[BETA] Não foi possível obter as informações.`)
        .setDescription("**Veja abaixo possíveis motivos:**\n\n- Erro de requisição. (Tente novamente)\n- Site base fora do ar.")
        .addField('Erro:',`\`${err}\``)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed)
    }
}