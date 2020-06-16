const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    randomNumberUser = 0;
    randomNumberUser = Math.floor(Math.random() * 21);
    randomNumberBot = 0;
    randomNumberBot = Math.floor(Math.random() * 21);

    let sorte = [
        '🍀 Parece que hoje é seu dia de sorte, aproveite!',
        '🍀 Caraca amigo, você está radiante! Hoje sem dúvidas é o seu dia!',
        '🍀 Que tal jogar na Mega-Sena? Eu sou preciso nas minhas previsões tá bom?'
    ];

    let azar = [
        '🍀 Pelo jeito você não está com sorte hoje. Tome cuidado!',
        '🍀 É aquele velho ditado né, azar no jogo, sorte no amor. Vai em frente campeão.',
        '🍀 Se eu fosse você, hoje eu nem sairia de casa. É sério!'
    ];

    let nda = [
        '🍀 Nem sorte nem azar! Tipo o gato lá, aquele da caixa.',
        '🍀 Eu não diria que você está com sorte. Nem com azar. Eu até diria, mas não vou.',
        '🍀 Como não consegui definir sua sorte aqui vai uma piada: O que um pontinho marrom na pré história?'
    ];

    if (randomNumberUser < randomNumberBot) {
        const embed = new Discord.MessageEmbed() 
        .setDescription(azar[Math.floor(Math.random() * azar.length)])
        .addField('Valor sorteado:', randomNumberUser)
        .addField('Valor bot:', randomNumberBot)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed)
    }
    else if (randomNumberUser > randomNumberBot) {
        const embed = new Discord.MessageEmbed() 
        .setDescription(sorte[Math.floor(Math.random() * sorte.length)])
        .addField('Valor sorteado:', randomNumberUser)
        .addField('Valor bot:', randomNumberBot)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed)
    }
    else if (randomNumberUser = randomNumberBot) {
        
        const embed = new Discord.MessageEmbed() 
        .setDescription(nda[Math.floor(Math.random() * nda.length)])
        .addField('Valor sorteado:', randomNumberUser)
        .addField('Valor bot:', randomNumberBot)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embed);
    }
    else {
        message.channel.send('Algum erro ocorreu aqui no meu sistema. Não vou errar na próxima!');
    }

}