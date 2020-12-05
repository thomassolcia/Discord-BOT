const Discord = require('discord.js');
exports.run = (client, message, args) => {
    try {
        let goat = [
            'https://media.giphy.com/media/SbtVCIxfmJlvfmL6d1/giphy.gif',
            'https://media.giphy.com/media/l41lKq44QEMdjxEo8/giphy.gif',
            'https://media.giphy.com/media/3oEduNAr2OCb4sCcNy/giphy.gif',
            'https://media.giphy.com/media/3oEdvaeeooHIyyEmeA/giphy.gif',
            'https://media.giphy.com/media/3oEduLR61N3xJR6AG4/giphy.gif',
            'https://media.giphy.com/media/3o85xLbDO8gcQ7UHcY/giphy.gif',
            'https://media.giphy.com/media/26BkNHWgjk6rtsQcU/giphy.gif',
            'https://media.giphy.com/media/3oEduNYxQUv72aroR2/giphy.gif',
            'https://media.giphy.com/media/3oEduHEMMx9lYW3KqQ/giphy.gif',
            'https://media.giphy.com/media/3oEduYhWuU6OLRSXbG/giphy.gif',
            'https://media.giphy.com/media/3oEduLUv9OYLosN9IY/giphy.gif',
            'https://media.giphy.com/media/l41lXXDuQayWMXUA0/giphy.gif',
            'https://media.giphy.com/media/3o85xJgOkNNsZjIWCQ/giphy.gif',
            'https://media.giphy.com/media/3oEduXaEvyrPwtfexO/giphy.gif',
            'https://media.giphy.com/media/3oEdv4f4qNhxOtgq7m/giphy.gif',
            'https://media.giphy.com/media/3oEduXaEvyrPwtfexO/giphy.gif',
            'https://media.giphy.com/media/WMNNYrfLHcKzu/giphy.gif',
            'https://media.giphy.com/media/xTiTnLBqQCogYtVeOA/giphy.gif',
            'https://media.giphy.com/media/l41m2WQoEySaC15hS/giphy.gif',
            'https://media.giphy.com/media/l41lT8JqKfSO5taE0/giphy.gif',
            'https://media.giphy.com/media/3oEduTDbLdlvwiM944/giphy.gif',
            'https://media.giphy.com/media/l41lQkwvGlLLUljTG/giphy.gif',
            'https://media.giphy.com/media/l41lNIXHydBUH05ag/giphy.gif',
            'https://media.giphy.com/media/l41lS9LWWuf5Z42Oc/giphy.gif',
            'https://media.giphy.com/media/xTiTnAwrDoiA752tBS/giphy.gif',
            'https://media.giphy.com/media/3oEduPzvHOtHWWH3ry/giphy.gif',
            'https://media.giphy.com/media/l41lSkJfgHtP3SGuQ/giphy.gif',
            'https://media.giphy.com/media/3oEdv7rlknq5j3dSDe/giphy.gif',
            'https://media.giphy.com/media/l0O9zC9yNjQq1rk9a/giphy.gif',
            'https://media.giphy.com/media/l41m54nolBBeVNGGA/giphy.gif'
        ];
        const goatembed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle("BODINHO 🐐")
            .setImage(goat[Math.floor(Math.random() * goat.length)])
            .setTimestamp()
            .setFooter(`Comando =goat`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
        message.channel.send(goatembed)
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Este comando não está disponível no momento!`)
            .setDescription("Contate alguém da staff para mais informações.")
            .addField('Erro:', `\`${err}\``)
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =goat`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
        message.channel.send(embed)
    }
}

exports.conf = {
    commands: ["goat", "cabra"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'goat', 
    description: 'Mostra a imagem ou gif de uma cabra',
    usage: '[=]goat',
    kategori: 'animais'
};