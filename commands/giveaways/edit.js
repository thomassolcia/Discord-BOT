const ms = require("ms");
exports.run = async (client, message, args) => {
    try {
        message.delete()
        let messageID = args[0];
        client.giveawaysManager.edit(messageID, {
            newWinnerCount: parseInt(args[1]),
            addTime: parseInt(args[2]),
            newPrize: args.slice(3).join(" "),
        }).then(() => {
            message.channel.send("Sucesso! O sorteio foi atualizado.").then(msg => msg.delete({ timeout: 5000 }));
        }).catch((err) => {
            message.channel.send("Não foi encontrado nenhum sorteio em " + messageID + ", tente novamente").then(msg => msg.delete({ timeout: 5000 }));
        });
    } catch (err) {
        console.log(err)
    }
}
exports.conf = {
    commands: ["rafflee", "giveawaye", "sorteioe"],
    enabled: true,
    guildOnly: true
};
exports.help = {
    name: 'Sorteio',
    description: 'Edita um sorteio.',
    usage: '[=]sorteioe',
    kategori: 'giveaways'
};