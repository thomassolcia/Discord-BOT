const { GiveawaysManager } = require("discord-giveaways");
const ms = require("ms");
exports.run = async (client, message, args) => {
    try {
        message.delete()
        client.giveawaysManager.start(message.channel, {
            hostedBy: `<@${message.author.id}>`,
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1]),
            messages: {
                giveaway: "@everyone\n\n🎉 **SORTEIO** 🎉",
                giveawayEnded: "@everyone\n\n🎉 **SORTEIO ENCERRADO** 🎉",
                timeRemaining: "Tempo Restante: **{duration}**!",
                inviteToParticipate: "Reaja com 🎉 para participar!\n",
                winMessage: "Parabéns, {winners}! Você recebeu **{prize}**!",
                embedFooter: "Servidor Proerd",
                noWinner: "Sorteio cancelado, sem participantes válidos.",
                hostedBy: "Host: {user}",
                winners: "Vencedor(es)",
                endedAt: "Finalizado em",
                units: {
                    seconds: "segundos",
                    minutes: "minutos",
                    hours: "horas",
                    days: "dias",
                    pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
                }
            }
        }).then((gData) => {
            console.log(gData);
        });
    } catch (err) {
        console.log(err)
    }
}
exports.conf = {
    commands: ["raffle", "giveaway", "sorteio"],
    enabled: true,
    guildOnly: true
};
exports.help = {
    name: 'Sorteio',
    description: 'Realiza um sorteio.',
    usage: '[=]sorteio',
    kategori: 'giveaways'
};