const client = global.client;
var moment = require('moment-timezone');
const Database = require("./Helpers/Database");
const vtDaily = new Database("Database", "VoiceDaily");
const vtWeekly = new Database("Database", "VoiceWeekly");
const vtMonthly = new Database("Database", "VoiceMonthly");
const mdbDaily = new Database("Database", "MessageDaily");
const mdbWeekly = new Database("Database", "MessageWeekly");
const mdbMonthly = new Database("Database", "MessageMonthly");

client.on("ready", () => {
    console.log("Bot pronto para uso!");
    setInterval(() => {
        var quotes = ['=ajuda']
        client.user.setActivity(
            quotes[Math.floor(quotes.length * Math.random())], { type: 'PLAYING' }
        );
    }, 60000);
});

client.on("ready", () => {
    setInterval(() => {
        var d = new Date();
        var n = d.getDay() - 1
        if (n == '1') {
            vtMonthly.set(`stats.${"713158092061278278"}`, {});
            mdbMonthly.set(`stats.${"713158092061278278"}`, {});
        } else {
            return;
        }
    }, 86400000);
    setInterval(() => {
        var d = new Date();
        var n = d.getDay() - 1
        if (n == '7' || n == '14' || n == '21') {
            vtWeekly.set(`stats.${"713158092061278278"}`, {});
            mdbWeekly.set(`stats.${"713158092061278278"}`, {});
        } else {
            return;
        }
    }, 86400000);
    setInterval(() => {
        brasil = moment().tz('America/Sao_Paulo').format('H:mm')
        if (brasil == '23:59' || brasil == '00:00') {
            vtDaily.set(`stats.${"713158092061278278"}`, {});
            mdbDaily.set(`stats.${"713158092061278278"}`, {});
        } else {
            return;
        }
    }, 60000);
});

client.login(global.Settings.Token);