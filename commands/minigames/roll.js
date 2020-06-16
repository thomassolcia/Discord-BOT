const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var amount = args[0]
    var bonus = args[1]
    if (bonus == undefined){
        bonus = 0;
    }

    if (amount === 'd2') {
        min = Math.ceil(1);
        max = Math.floor(3);
        d2 = 0;
        d2 = Math.floor(Math.random() * (max - min) + min);
        somado = +d2 + +bonus;
        const embedd2 = new Discord.MessageEmbed() 
        .setDescription(`🎲 Você rolou um ${amount} com bônus de ${bonus}`)
        .addField('Dado', d2)
        .addField('Bonus', bonus)
        .addField('Valor somado', somado)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embedd2)
    }
    else if (amount === 'd4') {
        min = Math.ceil(1);
        max = Math.floor(5);
        d4 = 0;
        d4 = Math.floor(Math.random() * (max - min) + min);
        somado = +d4 + +bonus;
        const embedd4 = new Discord.MessageEmbed() 
        .setDescription(`🎲 Você rolou um ${amount} com bônus de ${bonus}`)
        .addField('Dado', d4)
        .addField('Bonus', bonus)
        .addField('Valor somado', somado)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embedd4)
    }
    else if (amount === 'd6' && msgs[2] == undefined) {
        min = Math.ceil(1);
        max = Math.floor(7);
        d6 = 0;
        d6 = Math.floor(Math.random() * (max - min) + min);
        somado = +d6 + +bonus;
        const embedd6 = new Discord.MessageEmbed() 
        .setDescription(`🎲 Você rolou um ${amount} com bônus de ${bonus}`)
        .addField('Dado', d6)
        .addField('Bonus', bonus)
        .addField('Valor somado', somado)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embedd6)
    }
    else if (amount === 'd8') {
        min = Math.ceil(1);
        max = Math.floor(9);
        d8 = 0;
        d8 = Math.floor(Math.random() * (max - min) + min);
        somado = +d8 + +bonus;
        const embedd8 = new Discord.MessageEmbed() 
        .setDescription(`🎲 Você rolou um ${amount} com bônus de ${bonus}`)
        .addField('Dado', d8)
        .addField('Bonus', bonus)
        .addField('Valor somado', somado)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embedd8)
    }
    else if (amount === 'd10') {
        min = Math.ceil(1);
        max = Math.floor(11);
        d10 = 0;
        d10 = Math.floor(Math.random() * (max - min) + min);
        somado = +d10 + +bonus;
        const embedd10 = new Discord.MessageEmbed() 
        .setDescription(`🎲 Você rolou um ${amount} com bônus de ${bonus}`)
        .addField('Dado', d10)
        .addField('Bonus', bonus)
        .addField('Valor somado', somado)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embedd10)
    }
    else if (amount === 'd20') {
        min = Math.ceil(1);
        max = Math.floor(21);
        d20 = 0;
        d20 = Math.floor(Math.random() * (max - min) + min);
        somado = +d20 + +bonus;
        const embedd20 = new Discord.MessageEmbed() 
        .setDescription(`🎲 Você rolou um ${amount} com bônus de ${bonus}`)
        .addField('Dado', d20)
        .addField('Bonus', bonus)
        .addField('Valor somado', somado)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embedd20)
    }
    else if (amount === 'd100') {
        min = Math.ceil(1);
        max = Math.floor(101);
        d100 = 0;
        d100 = Math.floor(Math.random() * (max - min) + min);
        somado = +d100 + +bonus;
        const embedd100 = new Discord.MessageEmbed() 
        .setDescription(`🎲 Você rolou um ${amount} com bônus de ${bonus}`)
        .addField('Dado', d100)
        .addField('Bonus', bonus)
        .addField('Valor somado', somado)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embedd100)
    }
    else { return message.channel.send("Insira um tipo de dado existente!") }
}