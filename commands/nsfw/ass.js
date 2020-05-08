exports.run = async (client, message, args) => {
    const snekfetch = require('snekfetch');
    const Discord = require('discord.js')
if (!message.channel.nsfw) {
    message.react('💢');
    return message.channel.send(errMessage);

} else {

    const id = [Math.floor(Math.random() * 4923)];
    const res = await snekfetch.get(`http://api.obutts.ru/butts/${id}`);
    const preview = res.body[0]["PREVIEW".toLowerCase()];
    const image = `http://media.obutts.ru/${preview}`;

    const embed = new Discord.MessageEmbed()
        .setFooter('Tags: Ass')
        .setImage(image)
        .setColor('#000000');
    return message.channel.send({ embed });
}
}