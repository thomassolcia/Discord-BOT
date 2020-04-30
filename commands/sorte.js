exports.run = async (client, message, args) => {
    randomNumberUser = 0;
    randomNumberUser = Math.floor(Math.random() * 21);
    randomNumberBot = 0;
    randomNumberBot = Math.floor(Math.random() * 21);

    if (randomNumberUser < randomNumberBot) {
        message.channel.send('\n**Valor sorteado:** ' + '`' + randomNumberUser + '`' + '\n**Valor bot:** ' + '`' + randomNumberBot + '`' + '\n*Pelo jeito você não está com sorte hoje. Tome cuidado!*');
    }
    else if (randomNumberUser > randomNumberBot) {
        message.channel.send('\n**Valor sorteado:** ' + '`' + randomNumberUser + '`' + '\n**Valor bot:** ' + '`' + randomNumberBot + '`' + '\n*Parece que hoje é seu dia de sorte, aproveite!*');
    }
    else if (randomNumberUser = randomNumberBot) {
        message.channel.send('\n**Valor sorteado:** ' + '`' + randomNumberUser + '`' + '\n**Valor bot:** ' + '`' + randomNumberBot + '`' + '\n*Nem sorte nem azar! Tipo o gato lá, aquele da caixa.*');
    }
    else {
        message.channel.send('Algum erro ocorreu aqui no meu sistema. Não vou errar na próxima!');
    }

}