const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require("node-fetch");
const wakeUpDyno = (url, interval) => {
    const milliseconds = interval * 60000;
    setTimeout(() => {
        fetch(url);
    }, milliseconds);
};

module.exports = wakeUpDyno;
bot.login('NzA0MzkyOTY3MDc0MzQ5MDg3.Xqcmqg.BhHFpk4jTCPoKmR2Oe3-YvHtJQg');

// COMANDOS RESPOSTAS
bot.on('message', message => {
let responseObject = {
    '=ping' : 'pong',
    '=comandos' : '(**EVERYONE**)\n=ping\n=sorte\n=d[4-100]r\n\n(**OWNERS/PARTNERS**)\n=limpar'
};

if (responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}

// TESTE DE SORTE
if (message.content.startsWith('=sorte')){
    randomNumberUser = 0;
    randomNumberUser = Math.floor(Math.random() * 21);
    randomNumberBot = 0;
    randomNumberBot = Math.floor(Math.random() * 21);

    if(randomNumberUser < randomNumberBot){
        message.reply('\n**Valor sorteado:** ' + '`' + randomNumberUser + '`' + '\n**Valor bot:** ' + '`' + randomNumberBot + '`' + '\n*Pelo jeito você não está com sorte hoje. Tome cuidado!*');
    }
    else if(randomNumberUser > randomNumberBot){
        message.reply('\n**Valor sorteado:** ' + '`' + randomNumberUser + '`' + '\n**Valor bot:** ' + '`' + randomNumberBot + '`' + '\n*Parece que hoje é seu dia de sorte, aproveite!*');
    }
    else if(randomNumberUser = randomNumberBot){
        message.reply('\n**Valor sorteado:** ' + '`' + randomNumberUser + '`' + '\n**Valor bot:** ' + '`' + randomNumberBot + '`' + '\n*Nem sorte nem azar! Tipo o gato lá, aquele da caixa.*');
    }
    else{
        message.reply('Algum erro ocorreu aqui no meu sistema. Não vou errar na próxima!');
    }
}

// ROLAGEM DE DADOS D4 - D100
if (message.content.startsWith('=d4r')){
    d4 = 0;
    d4 = Math.floor(Math.random() * (4 - 1) + 1);

    message.reply('Valor do dado: ' + d4);
}
if (message.content.startsWith('=d6r')){
    d6 = 0;
    d6 = Math.floor(Math.random() * (6 - 1) + 1);

    message.reply('Valor do dado: ' + d6);
}
if (message.content.startsWith('=d8r')){
    d8 = 0;
    d8 = Math.floor(Math.random() * (8 - 1) + 1);

    message.reply('Valor do dado: ' + d8);
}
if (message.content.startsWith('=d10r')){
    d10 = 0;
    d10 = Math.floor(Math.random() * (10 - 1) + 1);

    message.reply('Valor do dado: ' + d10);
}
if (message.content.startsWith('=d20r')){
    d20 = 0;
    d20 = Math.floor(Math.random() * (20 - 1) + 1);

    message.reply('Valor do dado: ' + d20);
}
if (message.content.match('=d100r')){
    d100 = 0;
    d100 = Math.floor(Math.random() * (100 - 1) + 1);

    message.reply('Valor do dado: ' + d100);
}

//DELEÇÃO DE MENSSAGENS
if(message.member.roles.cache.some(role => role.name === 'OWNERS' || role.name === 'PARTNERS') && message.content.startsWith('=limpar')){
    msgDel = 100;
    numberMessages = msgDel;
    message.channel.messages.fetch({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
}
});