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
        brasil = moment().tz('America/Sao_Paulo').format('H:mm')
        var d = new Date();
        var n = d.getDay() - 1
        if (brasil == '0:01' && n == '1') {
            vtMonthly.set(`stats.${"364926866487902208"}`, {});
            mdbMonthly.set(`stats.${"364926866487902208"}`, {});
            vtMonthly.set(`stats.${"713158092061278278"}`, {});
            mdbMonthly.set(`stats.${"713158092061278278"}`, {});
        } else {
            return;
        }
    }, 60000);
    setInterval(() => {
        brasil = moment().tz('America/Sao_Paulo').format('H:mm')
        var d = new Date();
        var n = d.getDay() - 1
        if ((brasil == '0:01' && n == '8') || (brasil == '0:01' && n == '15') || (brasil == '0:01' && n == '22')) {
            vtWeekly.set(`stats.${"364926866487902208"}`, {});
            mdbWeekly.set(`stats.${"364926866487902208"}`, {});
            vtWeekly.set(`stats.${"713158092061278278"}`, {});
            mdbWeekly.set(`stats.${"713158092061278278"}`, {});
        } else {
            return;
        }
    }, 60000);
    setInterval(() => {
        brasil = moment().tz('America/Sao_Paulo').format('H:mm')
        if (brasil == '0:01') {
            vtDaily.set(`stats.${"364926866487902208"}`, {});
            mdbDaily.set(`stats.${"364926866487902208"}`, {});
            vtDaily.set(`stats.${"713158092061278278"}`, {});
            mdbDaily.set(`stats.${"713158092061278278"}`, {});
        } else {
            console.log(brasil)
            return;
        }
    }, 60000);
});

client.login(global.Settings.Token);