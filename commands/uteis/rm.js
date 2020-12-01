const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args, level, id) => {
    var id = db.add(`guild_${message.guild.id}_rmID_${id}`, 1)
    console.log(id)
    var time = args[0];
    var reminder = args.splice(1).join(' ');

    if (!time) return message.channel.send('Não posso te lembrar se você não definir um tempo...').then(message.delete({ timeout: 5000 }));;
    if (!reminder) return message.channel.send('Você esqueceu de inserir uma mensagem!').then(message.delete({ timeout: 5000 }));

    time = await time.toString();
    if (time.indexOf('s') !== -1) {
        var timesec = await time.replace(/s.*/, '');
        var timems = await timesec * 1000;
    } else if (time.indexOf('m') !== -1) {
        var timemin = await time.replace(/m.*/, '');
        timems = await timemin * 60 * 1000;
    } else if (time.indexOf('h') !== -1) {
        var timehour = await time.replace(/h.*/, '');
        timems = await timehour * 60 * 60 * 1000;
    } else if (time.indexOf('d') !== -1) {
        var timeday = await time.replace(/d.*/, '');
        timems = await timeday * 60 * 60 * 24 * 1000;
    } else {
        return message.reply('O tempo deve ser númerico [s/m/h/d]');
    }
    const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTimestamp()
        .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        .setTitle(`✉️ Lembrete #${id}`)
        .setDescription(`Lembrarei você de \`${reminder}\` daqui \`${time}\` em seu chat privado!`)
    message.channel.send(embed)
    setTimeout(function () {
        const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle(`✉️ Lembrete #${id}`)
            .setDescription(`${time} atrás você pediu para te lembrar de \`${reminder}\``)
        message.author.send(embed)
    }, parseInt(timems));
};

exports.conf = {
    commands: ["rm", "lembrar"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'rm',
    description: 'Te lembra de algo',
    usage: '[=]rm',
    kategori: 'uteis'
};