const Discord = require('discord.js');
exports.run = async(client, message) => {
    const ms = await message.channel.send("Ping?");
    const clientms = ms.createdTimestamp - message.createdTimestamp;
    const tempEmbed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('Pong!')
        .addField(`Bot`, `${clientms}ms`, true)
        .addField(`API`, `${Math.floor(client.ws.ping)}ms`, true)
        .setTimestamp()
        .setFooter(`Comando =ping`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
    ms.delete()
    ms.channel.send(tempEmbed)
}

exports.conf = {
    commands: ["ping", "latencia"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'ping', 
    description: 'Mostra informações sobre o ping do bot',
    usage: '[=]ping',
    kategori: 'info'
};