exports.run = async (client, message, args) => {
    const amount = args.join(' ');

    if (amount === 'd2'){
        min = Math.ceil(1);
        max = Math.floor(3);
        var a = 2;
        d2 = 0;
        d2 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d2);
    }
    else if (amount === 'd4' ){
        min = Math.ceil(1);
        max = Math.floor(5);
        d4 = 0;
        d4 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d4);
    }
    else if (amount === 'd6' && msgs[2] == undefined){
        min = Math.ceil(1);
        max = Math.floor(7);
        d6 = 0;
        d6 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d6);
    }
    else if (amount === 'd8' ){
        min = Math.ceil(1);
        max = Math.floor(9);
        d8 = 0;
        d8 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d8);
    }
    else if (amount === 'd10' ){
        min = Math.ceil(1);
        max = Math.floor(11);
        d10 = 0;
        d10 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d10);
    }
    else if (amount === 'd20' ){
        min = Math.ceil(1);
        max = Math.floor(21);
        d20 = 0;
        d20 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d20);
    }
    else if (amount === 'd100' ){
        min = Math.ceil(1);
        max = Math.floor(101);
        d100 = 0;
        d100 = Math.floor(Math.random() * (max - min) + min);
        message.reply('Valor do dado: ' + d100);
    }
    else{return message.channel.send("Insira um valor de dado existente!")}
}