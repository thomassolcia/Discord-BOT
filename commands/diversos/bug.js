const Discord = require('discord.js')
const c = require('../../config.json')
exports.run = async (client, message, args) => {
    await message.delete()

    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send(`${message.author}, digite o bug encontrado. 🐛`)
        return undefined;
    }

    const embed = new Discord.MessageEmbed()
        .setAuthor(`Econtrado por: ${message.author.username}`, message.author.displayAvatarURL)
        .setDescription(`${mensg}`)
        .setColor('GREEN')
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter(message.author.tag);
    client.users.cache.get(`363422400488144896`).send(embed)
        .then(function (msg) {
            msg.react("👍");
            msg.react("👎"); 
            //message.delete({ timeout: 5000, reason: 'Feito!' });
            message.channel.send(`${message.author}, o relatório do bug foi enviado para meu criador <@363422400488144896>. 🐛`).then(msg => msg.delete({ timeout: 5000, reason: 'Feito!' }))
        }).catch(function (error) {
            console.log(error);
        });
}