exports.run = async (client, message, args) => {
    upbot = (client.uptime / ((3, 6) ** 8.426));
    if (parseFloat(upbotfix).toFixed(2) <= 23.999999998) {
        message.reply('Espancando maconheiros tem ' + parseFloat(upbot).toFixed(2) + ' horas!');
    } else if ((parseFloat(upbotfix).toFixed(2) / 24) >= 0.9 && (parseFloat(upbotfix).toFixed(2) / 24) < 1.9) {
        message.reply('Espancando maconheiros tem ' + parseInt(upbotfix).toFixed(2) / 24 + ' dia!');
    } else if ((parseFloat(upbotfix).toFixed(2) / 24) >= 1.9) {
        message.reply('Espancando maconheiros tem ' + parseInt(upbotfix).toFixed(2) / 24 + ' dias!');
    }
}