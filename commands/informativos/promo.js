const Discord = require('discord.js');
exports.run = (client, message, args) => {

let link = args[3]
let name = args[0]
let until = args[1]
let schedule = args[2]
      
    if(!args[0]){
        message.reply(`Você precisa inserir o nome do jogo, data e hora final da promoção e o link.`)
    }

    if(!args[1]){
        message.reply(`Você precisa inserir a data e hora final da promoção e o link.`)
    }

    if(!args[2]){
        message.reply(`Você precisa inserir a hora que a promoção acaba e o link.`)
    }

    if(!args[3]){
        message.reply(`Você precisa inserir o link da promoção.`)
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
    client.channels.cache.get(`707809716205518868`).send(offEmbed)
}