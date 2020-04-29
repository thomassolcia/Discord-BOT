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
    console.log('logado');
    let myGuild = bot.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let statuses = [
        "=comandos para obter dicas!",
        memberCount + " maconheiros na reabilitação"
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "PLAYING"});
    }, 5000)
});

bot.on('ready', () => {
    let myGuild = bot.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
    memberCountChannel.setName('Usuários: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

bot.on('guildMemberAdd', member =>{
    let myGuild = bot.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
    memberCountChannel.setName('Usuários: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
    member.guild.channels.cache.get('694285200582115418').send('@' + member.user.username + ' entrou na reabilitação!')
    member.send('Bem-Vindo ao Proerd! Não esqueça de ler as #regras, qualquer dúvida é só perguntar para algum admin! Se divirta!')
});

bot.on('guildMemberRemove', member =>{
    let myGuild = bot.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
    memberCountChannel.setName('Usuários: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
    member.guild.channels.cache.get('694285200582115418').send('@' + member.user.username + ' fugiu da reabilitação! Vocês conhecem alguém da familia dele?')
});

// COMANDOS - RESPOSTAS
bot.on('message', async message => {
    responseObject = comandos;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    
    if(message.content === config.prefix +'ping'){
        const ms = await message.channel.send("Ping: ");
        const clientms = ms.createdTimestamp - message.createdTimestamp;
        ms.edit(`Pong! Latência é de ${ms.createdTimestamp - message.createdTimestamp}ms.`);
    }

    if(message.content.startsWith (config.prefix + 'nick')){
        message.member.setNickname(msgs[1]);
        message.reply(' Seu apelido foi alterado para ' + msgs[1]);
    }

    if(message.content === (config.prefix + 'uptime')){
        upbot = (bot.uptime/((3,6)**8.426));
        message.reply('Espancando maconheiros tem ' + parseFloat(upbot).toFixed(2) + ' horas!');
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
    //d2
    if (msgs[1] === 'd2' && msgs[2] === undefined){
        min = Math.ceil(1);
        max = Math.floor(3);
        var a = 2;
        d2 = 0;
        d2 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d2);
    }else if(msgs[1] === 'd2' && msgs[2] != undefined){
        min = Math.ceil(1);
        max = Math.floor(3);
        a = msgs[2];
        d2 = 0;
        d2 = Math.floor(Math.random() * (max - min) + min);
        d2bonus = parseInt((+a)+(+d2));
        message.reply('Valor do dado: ' + d2 + ' com bônus: ' + (d2bonus));
    }

    //d4
    if (msgs[1] === 'd4' && msgs[2] === undefined){
        min = Math.ceil(1);
        max = Math.floor(5);
        d4 = 0;
        d4 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d4);
    }else if(msgs[1] === 'd4' && msgs[2] != undefined){
        min = Math.ceil(1);
        max = Math.floor(5);
        a = msgs[2];
        d4 = 0;
        d4 = Math.floor(Math.random() * (max - min) + min);
        d4bonus = parseInt((+a)+(+d4));
        message.reply('Valor do dado: ' + d4 + ' com bônus: ' + (d4bonus));
    }

    //d6
    if (msgs[1] === 'd6' && msgs[2] == undefined){
        min = Math.ceil(1);
        max = Math.floor(7);
        d6 = 0;
        d6 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d6);
    }else if(msgs[1] === 'd6' && msgs[2] != undefined){
        min = Math.ceil(1);
        max = Math.floor(7);
        a = msgs[2];
        d6 = 0;
        d6 = Math.floor(Math.random() * (max - min) + min);
        d6bonus = parseInt((+a)+(+d6));
        message.reply('Valor do dado: ' + d6 + ' com bônus: ' + (d6bonus));
    }

    //d8
    if (msgs[1] === 'd8' && msgs[2] === undefined){
        min = Math.ceil(1);
        max = Math.floor(9);
        d8 = 0;
        d8 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d8);
    }else if(msgs[1] === 'd8' && msgs[2] != undefined){
        min = Math.ceil(1);
        max = Math.floor(9);
        a = msgs[2];
        d8 = 0;
        d8 = Math.floor(Math.random() * (max - min) + min);
        d8bonus = parseInt((+a)+(+d8));
        message.reply('Valor do dado: ' + d8 + ' com bônus: ' + (d8bonus));
    }

    //d10
    if (msgs[1] === 'd10' && msgs[2] === undefined){
        min = Math.ceil(1);
        max = Math.floor(11);
        d10 = 0;
        d10 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d10);
    }else if(msgs[1] === 'd10' && msgs[2] != undefined){
        min = Math.ceil(1);
        max = Math.floor(11);
        a = msgs[2];
        d10 = 0;
        d10 = Math.floor(Math.random() * (max - min) + min);
        d10bonus = parseInt((+a)+(+d10));
        message.reply('Valor do dado: ' + d10 + ' com bônus: ' + (d10bonus));
    }

    //d20
    if (msgs[1] === 'd20' && msgs[2] === undefined){
        min = Math.ceil(1);
        max = Math.floor(21);
        d20 = 0;
        d20 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d20);
    }else if(msgs[1] === 'd20' && msgs[2] != undefined){
        min = Math.ceil(1);
        max = Math.floor(21);
        a = msgs[2];
        d20 = 0;
        d20 = Math.floor(Math.random() * (max - min) + min);
        d20bonus = parseInt((+a)+(+d20));
        message.reply('Valor do dado: ' + d20 + ' com bônus: ' + (d20bonus));
    }

    //d100
    if (msgs[1] === 'd100' && msgs[2] === undefined){
        min = Math.ceil(1);
        max = Math.floor(101);
        d100 = 0;
        d100 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d100);
    }else if(msgs[1] === 'd100' && msgs[2] != undefined){
        min = Math.ceil(1);
        max = Math.floor(101);
        a = msgs[2];
        d100 = 0;
        d100 = Math.floor(Math.random() * (max - min) + min);
        d100bonus = parseInt((+a)+(+d100));
        message.reply('Valor do dado: ' + d100 + ' com bônus: ' + (d100bonus));
    }
}
//DELEÇÃO DE MENSSAGENS
if(message.member.roles.cache.some(role => role.name === 'OWNERS' || role.name === 'PARTNERS' || role.name === 'testBOT') && message.content.startsWith(config.prefix + 'limpar')){
    msgDel = msgs[1];
    if(msgs[1]>100){
        message.channel.send('Valor acima de 100 não é permitido. Diminua!');
    }
    else{
    numberMessages = msgDel;
    message.channel.messages.fetch({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
    }
}
});
bot.login(config.token);