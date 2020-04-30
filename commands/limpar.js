exports.run = async (client, message, args) => {
    const amount = args.join(' ');

    if (!amount) return message.reply('Você não inseriu a quantidade de mensagens que deseja apagar.');
    if (isNaN(amount)) return message.reply('Valor inválido! Tente com números.');

    if (amount > 100) return message.reply('O limite é 100 mensagens por vez! Tente diminuir.');
    if (amount < 1) return message.reply('Você precisa deletar pelo menos 1 mensagem!');

    await message.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages)
    })
}