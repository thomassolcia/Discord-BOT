exports.run = async (client, message, args) => {
    upbot = (client.uptime/((3,6)**8.426));
    message.reply('Espancando maconheiros tem ' + parseFloat(upbot).toFixed(2) + ' horas!');
}