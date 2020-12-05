const Discord = require('discord.js');
exports.run = (client, message, args) => {
    try {
        let raccon = [
            'https://media.giphy.com/media/ofHpfBbgXhEVG/giphy.gif',
            'https://media.giphy.com/media/3WvdC5etwu52rLUAWm/giphy.gif',
            'https://media.giphy.com/media/DAkTj5U6okQY8/giphy.gif',
            'https://media.giphy.com/media/vzkSu4oe620Tu/giphy.gif',
            'https://media.giphy.com/media/ddk1FDgb2AHSw/giphy.gif',
            'https://media.giphy.com/media/9rB1gWMNDt4ze/giphy.gif',
            'https://media.giphy.com/media/JdBQS6rYhdADm/giphy.gif',
            'https://media.giphy.com/media/26BGw0TqtQNHReQPm/giphy.gif',
            'https://media.giphy.com/media/kAbWiuvtzoG3e/giphy.gif',
            'https://media.giphy.com/media/oqxHGqMrKmeVG/giphy.gif',
            'https://media.giphy.com/media/5K7cWu5Am8Feo/giphy.gif',
            'https://media.giphy.com/media/UTy9DfxPwHFKM/giphy.gif',
            'https://media.giphy.com/media/8297LOq0YPoFa/giphy.gif',
            'https://media.giphy.com/media/NSzhHnpZ2nGjS/giphy.gif',
            'https://media.giphy.com/media/hZFnPRF4U2mwU/giphy.gif',
            'https://media.giphy.com/media/zpisCRDjcmvU4/giphy.gif',
            'https://media.giphy.com/media/VpVQouLQgTI3e/giphy.gif',
            'https://media.giphy.com/media/w6xbAu4Vh94dy/giphy.gif',
            'https://media.giphy.com/media/176PAmzjLjtMQ/giphy.gif',
            'https://media.giphy.com/media/14d8cRr25KPxbG/giphy.gif',
            'https://media.giphy.com/media/9d2kiSODsnz7q/giphy.gif',
            'https://media.giphy.com/media/agM5K5HuNqvnO/giphy.gif',
            'https://media.giphy.com/media/2zoLgckxd9FxDgx6gD/giphy.gif',
            'https://media.giphy.com/media/y4UxVZgzlE532/giphy.gif',
            'https://media.giphy.com/media/pi2pWMN3oJLu8/giphy.gif',
            'https://media.giphy.com/media/6NtM0tLYeLwT6/giphy.gif',
            'https://media.giphy.com/media/3d78jQ2gNDv3AqfSiI/giphy.gif',
            'https://media.giphy.com/media/iGotKDmnfyQpy/giphy.gif',
            'https://media.giphy.com/media/2j3cNToj6ek2A/giphy.gif',
            'https://media.giphy.com/media/JumHZQU0IABMI/giphy.gif'
        ];
        const racconembed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle("GUAXININHO 🦝")
            .setImage(raccon[Math.floor(Math.random() * raccon.length)])
            .setTimestamp()
            .setFooter(`Comando =raccoon`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
        message.channel.send(racconembed)
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Este comando não está disponível no momento!`)
            .setDescription("Contate alguém da staff para mais informações.")
            .addField('Erro:', `\`${err}\``)
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =raccoon`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
        message.channel.send(embed)
    }
}

exports.conf = {
    commands: ["raccoon", "guaxinim", "racoon"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'raccoon', 
    description: 'Mostra a imagem ou gif de um guaxinim',
    usage: '[=]raccoon',
    kategori: 'animais'
};