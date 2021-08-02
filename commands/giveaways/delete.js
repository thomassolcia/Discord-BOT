exports.run = async (client, message, args) => {
    try {
        message.delete();
        let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("Sucesso! Sorteio deletado.").then(msg => msg.delete({ timeout: 5000 }));
        }).catch((err) => {
            message.channel.send("Não foi encontrado nenhum sorteio em " + messageID + ", tente novamente").then(msg => msg.delete({ timeout: 5000 }));
        });
    } catch (err) {
        console.log(err)
    }
}
exports.conf = {
    commands: ["raffled", "giveawayd", "sorteiod"],
    enabled: true,
    guildOnly: true
};
exports.help = {
    name: 'Sorteio',
    description: 'Deleta um sorteio.',
    usage: '[=]sorteiod',
    kategori: 'giveaways'
};