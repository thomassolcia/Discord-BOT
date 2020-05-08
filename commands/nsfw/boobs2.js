exports.run = async (client, message, args) => {
    const snekfetch = require('snekfetch');
    const Discord = require('discord.js')
    const randomPuppy = require('random-puppy');

    if (!message.channel.nsfw) {
        message.react('💢');
        return message.channel.send(errMessage);

    } else {

        const id = [Math.floor(Math.random() * 10930)];
        const res = await snekfetch.get(`http://api.oboobs.ru/boobs/${id}`);
        const preview = res.body[0]["PREVIEW".toLowerCase()];
        const image = `http://media.oboobs.ru/${preview}`;

        const embed = new Discord.MessageEmbed()
            .setFooter('Tags: Boobs')
            .setImage(image)
            .setColor('#000000');
        return message.channel.send({ embed });
    }
}