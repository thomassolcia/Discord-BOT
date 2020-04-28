const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const comandos = require('./comandos.json')
const fetch = require("node-fetch");
const wakeUpDyno = (url, interval) => {
    const milliseconds = interval * 60000;
    setTimeout(() => {
        fetch(url);
    }, milliseconds);
};

module.exports = wakeUpDyno;
bot.login('NzA0MzkyOTY3MDc0MzQ5MDg3.Xqcmqg.BhHFpk4jTCPoKmR2Oe3-YvHtJQg');

bot.on('ready', () => {
    bot.user.setActivity('maconheiro na reabilitação')
    console.log('logado');
});

bot.on('guildMemberAdd', member =>{
    member.guild.channels.get('694285200582115418').send(member.user.username + 'entrou na reabilitação!')
    member.send('Bem-Vindo ao Proerd! Não esqueça de ler as #regras, qualquer dúvida é só perguntar para algum admin! Se divirta!')
});

bot.on('guildMemberRemove', member =>{
    member.guild.channels.get('694285200582115418').send(member.user.username + 'fugiu da reabilitação! Vocês conhecem alguém da familia dele?')
});

// COMANDOS - RESPOSTAS
bot.on('message', message => {
    responseObject = comandos;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    
    if(message.content === config.prefix +'ping'){
        message.channel.send('pong!')
    }
    if(message.content === config.prefix + 'mudarApelido'){
        message.member.setNickname(msgs[1]);
        message.reply(' Seu nick foi alterado para ' + msgs[1]);
    }

// TESTE DE SORTE
if (message.content === config.prefix + ('sorte')){
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

// ROLAGEM DE DADOS D2 - D100
if(message.content.startsWith(config.prefix + 'r')){
    if (msgs[1] === 'd2'){
        d2 = 0;
        d2 = Math.floor(Math.random() * (3 - 1) + 1);
        message.reply('Valor do dado: ' + d2);
    }
    if (msgs[1] === 'd4'){
        d4 = 0;
        d4 = Math.floor(Math.random() * (5 - 1) + 1);
        message.reply('Valor do dado: ' + d4);
    } 
    if (msgs[1] === 'd6'){
        d6 = 0;
        d6 = Math.floor(Math.random() * (7 - 1) + 1);
        message.reply('Valor do dado: ' + d6);
    } 
    if (msgs[1] === 'd8'){
        d8 = 0;
        d8 = Math.floor(Math.random() * (9 - 1) + 1);
        message.reply('Valor do dado: ' + d8);
    } 
    if (msgs[1] === 'd10'){
        d10 = 0;
        d10 = Math.floor(Math.random() * (11 - 1) + 1);
        message.reply('Valor do dado: ' + d10);
    } 
    if (msgs[1] === 'd20'){
        d20 = 0;
        d20 = Math.floor(Math.random() * (21 - 1) + 1);
        message.reply('Valor do dado: ' + d20);
    } 
}

//DELEÇÃO DE MENSSAGENS
if(message.member.roles.cache.some(role => role.name === 'OWNERS' || role.name === 'PARTNERS' || role.name === 'testBOT') && message.content.startsWith(config.prefix + 'limpar')){
    msgDel = msgs[1];
    if(msgs[1]>100){
        message.channel.send('Valor acima de 100 não é permitido. Diminua!');
    }
    else if(msgs[1] === (/^[A-Za-z ]+$/)){
        message.channel.send('Somente valores numéricos são permitidos');
    }
    else{
    numberMessages = msgDel;
    message.channel.messages.fetch({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
    }
}
});
bot.login(config.token);