const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const cheerio = require('cheerio')
const axios = require('axios')

let steamurl = args[0] 

if(!args[0]) {
    message.channel.send('Você precisa inserir seu [Steam ID]\nhttps://i.imgur.com/mRnq8JN.png');
}else{
    const fetchData = async(url) => {
        const result = await axios.get(url)
        return result.data
    }
    const content = await fetchData(`https://steamcalculator.com/id/${steamurl}`)
    const $ = cheerio.load(content)
    
        $('div.account').each((i, e) => {
            const nome = $(e).find('.account-profile__name').text();
            const staemLvl = $(e).find('.number-circle').text();
            const since = $(e).find('.text-card__text').text();
            var VAC = $(e).find('.status-card.status-card--success.fluid-item-20').text();
            const valueSteam = $(e).find('.account-value__amount').text();
            
            if (VAC.includes("clean")){
                VAC = 'Sem banimento VAC.';
            }else{
                VAC = 'Banimento VAC em registro.'
            }
    
            try{
                const steamEmbed = new Discord.MessageEmbed()
                .setTitle(`Informações Steam [${nome.replace( /\s/g, '')}]`)
                .addField('Nome:', nome.replace( /\s/g, ''), true)
                .addField('Level', staemLvl, true)
                .addField('VAC', VAC)
                .addField('Valor(aprox.)', valueSteam)
                .addField('Criada em', since.replace('None', ''))
                .setColor("BLUE")
                message.channel.send(steamEmbed)
            }catch(err){
                const embed = new Discord.MessageEmbed() 
                .setTitle(`[BETA] Não foi possível obter as informações.`)
                .setDescription("**Veja abaixo possíveis motivos:**\n- Erro de requisição. (Tente novamente)\n- Perfil privado ou level 0.\n- ID incorreto.")
                .addField('Erro:',`\`${err}\``)
                .setColor("BLUE")
                .setTimestamp()
                .setFooter(message.author.tag)
                message.channel.send(embed)
            }
            
    
        })
    }
}