const Discord = require('discord.js');
exports.run = (client, message, args) => {

let name = args[0]
let until = args[1]
let schedule = args[2]
let link = args[3]

    if(!args[0] || !args[1] || !args[2] || !args[3]){
        const embed = new Discord.MessageEmbed() 
        .setTitle(`Este comando está incorreto.`)
        .setDescription("Digite `=ajuda` para mais informações ou siga os passos abaixo!")
        .addField('Tente assim:',`\`=promo {nome_Jogo} {data_Final} {horario_Final} {link}\``)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed)
        return;
    }

    const offEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTimestamp(new Date())
    .setAuthor("💰 PROMOÇÃO DO DIA")
    .addField(`Jogo:`, `${name}`)
    .addField(`Disponível até`, `${until} às ${schedule}`)
    .addField(`Link`, `${link}`)
    .setFooter(message.author.tag)
    message.delete();
    client.channels.cache.get(`718011857771823114`).send(offEmbed)
}