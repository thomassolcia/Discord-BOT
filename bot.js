const client = global.client;
var moment = require('moment-timezone');
const Database = require("./Helpers/Database");
const vtDaily = new Database("Database", "VoiceDaily");
const vtWeekly = new Database("Database", "VoiceWeekly");
const vtMonthly = new Database("Database", "VoiceMonthly");
const mdbDaily = new Database("Database", "MessageDaily");
const mdbWeekly = new Database("Database", "MessageWeekly");
const mdbMonthly = new Database("Database", "MessageMonthly");
const mdbMonthlyPass = new Database("Database", "MessageMonthlyPass");
const vtMonthlyPass = new Database("Database", "VoiceMonthlyPass");
const config = require("./config.json");
require("dotenv").config();
client.on("ready", () => {
    console.log("Bot pronto para uso!");
    var quotes = ['=ajuda']
    client.user.setActivity(
        quotes[Math.floor(quotes.length * Math.random())], { type: 'PLAYING' }
    );
});

client.on("ready", () => {
    setInterval(() => {
        brasil = moment().tz('America/Sao_Paulo').format('H:mm')
        var d = new Date();
        var n = d.getDate()
        if (brasil == '0:01' && n == '1') {
            console.log(`Adiquirindo informações do mês...`)
            mespassadoMsg = mdbMonthly.get(`stats.${"364926866487902208"}`);
            mdbMonthlyPass.set(`stats.${"364926866487902208"}`, mespassadoMsg);
            mespassadoMsg = mdbMonthly.get(`stats.${"713158092061278278"}`);
            mdbMonthlyPass.set(`stats.${"713158092061278278"}`, mespassadoMsg);
            mespassadoVoice = vtMonthly.get(`stats.${"364926866487902208"}`);
            vtMonthlyPass.set(`stats.${"364926866487902208"}`, mespassadoVoice);
            mespassadoVoice = vtMonthly.get(`stats.${"713158092061278278"}`);
            vtMonthlyPass.set(`stats.${"713158092061278278"}`, mespassadoVoice);

            console.log(`resetando monthly [Horário: ${brasil}] [Dia: ${n}]`)
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
        var n = d.getDate()
        if ((brasil == '0:01' && n == '1') || (brasil == '0:01' && n == '8') || (brasil == '0:01' && n == '15') || (brasil == '0:01' && n == '22')) {
            console.log(`resetando weekly [Horário: ${brasil}] [Dia: ${n}]`)
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
        var d = new Date();
        var n = d.getDate()
        brasil = moment().tz('America/Sao_Paulo').format('H:mm')
        if (brasil == '0:01') {
            console.log(`resetando daily [Horário: ${brasil}] [Dia: ${n}]`)
            vtDaily.set(`stats.${"364926866487902208"}`, {});
            mdbDaily.set(`stats.${"364926866487902208"}`, {});
            vtDaily.set(`stats.${"713158092061278278"}`, {});
            mdbDaily.set(`stats.${"713158092061278278"}`, {});
        } else {
            return;
        }
    }, 60000);
});

client.login(config.token);
//client.login(global.Settings.Token);