const Discord = require("discord.js");
const Database = require("../../Helpers/Database");
const vt = new Database("Database", "Voice");
const mdb = new Database("Database", "Message");
const vtDaily = new Database("Database", "VoiceDaily");
const mdbDaily = new Database("Database", "MessageDaily");
const vtWeekly = new Database("Database", "VoiceWeekly");
const mdbWeekly = new Database("Database", "MessageWeekly");
const vtMonthly = new Database("Database", "VoiceMonthly");
const mdbMonthly = new Database("Database", "MessageMonthly");
const moment = require("moment");
require("moment-duration-format");
// exports.onLoad = (client) => {};
/**
 * 
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {

    let dateCreated = message.author.createdAt;
    let dateJoined = message.member.joinedAt;

    function checkDays(dateCreated) {
        let now = new Date();
        let diff = now.getTime() - dateCreated.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
    };

    function checkDays(dateJoined) {
        let now = new Date();
        let diff = now.getTime() - dateJoined.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
    };

    const voiceDataGlobal = vt.get(`stats.${message.guild.id}`) || undefined;
    const messageDataGlobal = mdb.get(`stats.${message.guild.id}`) || undefined;
    const voiceData1 = vtDaily.get(`stats.${message.guild.id}`) || undefined;
    const messageData1 = mdbDaily.get(`stats.${message.guild.id}`) || undefined;
    const voiceData7 = vtWeekly.get(`stats.${message.guild.id}`) || undefined;
    const messageData7 = mdbWeekly.get(`stats.${message.guild.id}`) || undefined;
    const voiceData30 = vtMonthly.get(`stats.${message.guild.id}`) || undefined;
    const messageData30 = mdbMonthly.get(`stats.${message.guild.id}`) || undefined;

    let voiceData = vt.get(`stats.${message.guild.id}.${message.author.id}`) || { voice: 0, channels: {} };
    let messageData = mdb.get(`stats.${message.guild.id}.${message.author.id}`) || { messages: 0, channels: {} };
    let voiceDataDaily = vtDaily.get(`stats.${message.guild.id}.${message.author.id}`) || { voice: 0, channels: {} };
    let messageDataDaily = mdbDaily.get(`stats.${message.guild.id}.${message.author.id}`) || { messages: 0, channels: {} };
    let voiceDataWeekly = vtWeekly.get(`stats.${message.guild.id}.${message.author.id}`) || { voice: 0, channels: {} };
    let messageDataWeekly = mdbWeekly.get(`stats.${message.guild.id}.${message.author.id}`) || { messages: 0, channels: {} };
    let voiceDataMonthly = vtMonthly.get(`stats.${message.guild.id}.${message.author.id}`) || { voice: 0, channels: {} };
    let messageDataMonthly = mdbMonthly.get(`stats.${message.guild.id}.${message.author.id}`) || { messages: 0, channels: {} };

    let voiceListMonthly = Object.keys(voiceDataMonthly.channels).map(vd => {
        return {
            Id: vd,
            Total: voiceDataMonthly.channels[vd]
        };
    }).sort((a, b) => b.Total - a.Total);

    let messageListMonthly = Object.keys(messageDataMonthly.channels).map(md => {
        return {
            Id: md,
            Total: messageDataMonthly.channels[md]
        };
    }).sort((a, b) => b.Total - a.Total);

    let voiceListWeekly = Object.keys(voiceDataWeekly.channels).map(vd => {
        return {
            Id: vd,
            Total: voiceDataWeekly.channels[vd]
        };
    }).sort((a, b) => b.Total - a.Total);

    let messageListWeekly = Object.keys(messageDataWeekly.channels).map(md => {
        return {
            Id: md,
            Total: messageDataWeekly.channels[md]
        };
    }).sort((a, b) => b.Total - a.Total);

    let voiceListDaily = Object.keys(voiceDataDaily.channels).map(vd => {
        return {
            Id: vd,
            Total: voiceDataDaily.channels[vd]
        };
    }).sort((a, b) => b.Total - a.Total);

    let messageListDaily = Object.keys(messageDataDaily.channels).map(md => {
        return {
            Id: md,
            Total: messageDataDaily.channels[md]
        };
    }).sort((a, b) => b.Total - a.Total);

    let voiceList = Object.keys(voiceData.channels).map(vd => {
        return {
            Id: vd,
            Total: voiceData.channels[vd]
        };
    }).sort((a, b) => b.Total - a.Total);

    let messageList = Object.keys(messageData.channels).map(md => {
        return {
            Id: md,
            Total: messageData.channels[md]
        };
    }).sort((a, b) => b.Total - a.Total);

    let voiceListAct = Object.keys(voiceData.channels).map(vd => {
        return {
            Id: vd,
            Total: voiceData.channels[vd]
        };
    }).sort((a, b) => b.Total - a.Total);

    let messageListAct = Object.keys(messageData.channels).map(md => {
        return {
            Id: md,
            Total: messageData.channels[md]
        };
    }).sort((a, b) => b.Total - a.Total);

    let messageListGlobal = "Sem informações.";
    if (messageDataGlobal) {
        messageListGlobal = Object.keys(messageDataGlobal || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageDataGlobal[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 1).map((user, index) => `\`${user.Total} msgs\``).join("\n");
    }

    let messageList30 = "Sem informações.";
    if (messageData30) {
        messageList30 = Object.keys(messageData30 || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageData30[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 1).map((user, index) => `\`${user.Total} msgs\``).join("\n");
    }

    let messageList7 = "Sem informações.";
    if (messageData7) {
        messageList7 = Object.keys(messageData7 || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageData7[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 1).map((user, index) => `\`${user.Total} msgs\``).join("\n");
    }

    let messageList1 = "Sem informações.";
    if (messageData1) {
        messageList1 = Object.keys(messageData1 || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageData1[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 1).map((user, index) => `\`${user.Total} msgs\``).join("\n");
    }

    let voiceListGlobal = "Sem informações.";
    if (voiceDataGlobal) {
        voiceListGlobal = Object.keys(voiceDataGlobal || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(voiceDataGlobal[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 1).map((user, index) => `\`${moment.duration(user.Total).format("H [h,] m [min]")}\``).join("\n");
    }

    let voiceList30 = "Sem informações.";
    if (voiceData30) {
        voiceList30 = Object.keys(voiceData30 || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(voiceData30[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 1).map((user, index) => `\`${moment.duration(user.Total).format("H [h,] m [min]")}\``).join("\n");
    }

    let voiceList7 = "Sem informações.";
    if (voiceData7) {
        voiceList7 = Object.keys(voiceData7 || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(voiceData7[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 1).map((user, index) => `\`${moment.duration(user.Total).format("H [h,] m [min]")}\``).join("\n");
    }

    let voiceList1 = "Sem informações.";
    if (voiceData1) {
        voiceList1 = Object.keys(voiceData1 || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(voiceData1[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 1).map((user, index) => `\`${moment.duration(user.Total).format("H [h,] m [min]")}\``).join("\n");
    }

    //Mais Ativos
    voiceListAct = voiceListAct.length > 1 ? voiceListAct.splice(0, 1) : voiceListAct;
    voiceListAct = voiceListAct.map((vd, index) => `${client.channels.cache.has(vd.Id) ? client.channels.cache.get(vd.Id).toString() : "#deleted-channel"}: \`${moment.duration(vd.Total).format("H [h,] m [min]")}\``).join("\n");
    messageListAct = messageListAct.length > 1 ? messageListAct.splice(0, 1) : messageListAct;
    messageListAct = messageListAct.map((md, index) => `${client.channels.cache.has(md.Id) ? client.channels.cache.get(md.Id).toString() : "#deleted-channel"}: \`${md.Total} msgs\``).join("\n");

    //Mensal
    messageListMonthly = messageListMonthly.length > 10 ? messageListMonthly.splice(0, 10) : messageListMonthly;
    messageListMonthly = messageListMonthly.map((md, index) => `${index + 1}. ${client.channels.cache.has(md.Id) ? client.channels.cache.get(md.Id).toString() : "#deleted-channel"}: \`${md.Total} msgs\``).join("\n");
    voiceListMonthly = voiceListMonthly.length > 10 ? voiceListMonthly.splice(0, 10) : voiceListMonthly;
    voiceListMonthly = voiceListMonthly.map((vd, index) => `${index + 1}. ${client.channels.cache.has(vd.Id) ? client.channels.cache.get(vd.Id).toString() : "#deleted-channel"}: \`${moment.duration(vd.Total).format("H [h,] m [min]")}\``).join("\n");

    //Semanal
    messageListWeekly = messageListWeekly.length > 10 ? messageListWeekly.splice(0, 10) : messageListWeekly;
    messageListWeekly = messageListWeekly.map((md, index) => `${index + 1}. ${client.channels.cache.has(md.Id) ? client.channels.cache.get(md.Id).toString() : "#deleted-channel"}: \`${md.Total} msgs\``).join("\n");
    voiceListWeekly = voiceListWeekly.length > 10 ? voiceListWeekly.splice(0, 10) : voiceListWeekly;
    voiceListWeekly = voiceListWeekly.map((vd, index) => `${index + 1}. ${client.channels.cache.has(vd.Id) ? client.channels.cache.get(vd.Id).toString() : "#deleted-channel"}: \`${moment.duration(vd.Total).format("H [h,] m [min]")}\``).join("\n");

    //Diário
    messageListDaily = messageListDaily.length > 10 ? messageListDaily.splice(0, 10) : messageListDaily;
    messageListDaily = messageListDaily.map((md, index) => `${index + 1}. ${client.channels.cache.has(md.Id) ? client.channels.cache.get(md.Id).toString() : "#deleted-channel"}: \`${md.Total} msgs\``).join("\n");
    voiceListDaily = voiceListDaily.length > 10 ? voiceListDaily.splice(0, 10) : voiceListDaily;
    voiceListDaily = voiceListDaily.map((vd, index) => `${index + 1}. ${client.channels.cache.has(vd.Id) ? client.channels.cache.get(vd.Id).toString() : "#deleted-channel"}: \`${moment.duration(vd.Total).format("H [h,] m [min]")}\``).join("\n");

    //Global
    voiceList = voiceList.length > 10 ? voiceList.splice(0, 10) : voiceList;
    voiceList = voiceList.map((vd, index) => `${index + 1}. ${client.channels.cache.has(vd.Id) ? client.channels.cache.get(vd.Id).toString() : "#deleted-channel"}: \`${moment.duration(vd.Total).format("H [h,] m [min]")}\``).join("\n");
    messageList = messageList.length > 10 ? messageList.splice(0, 10) : messageList;
    messageList = messageList.map((md, index) => `${index + 1}. ${client.channels.cache.has(md.Id) ? client.channels.cache.get(md.Id).toString() : "#deleted-channel"}: \`${md.Total} msgs\``).join("\n");

    let embed = new Discord.MessageEmbed();
    embed.setColor('BLACK')
        .setTimestamp()
        .setFooter(`Comando =me`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        .setThumbnail(message.author.avatarURL({ dynamic: true }))
        .setDescription(`<@${message.member.id}> (${message.member.displayName}#${message.author.discriminator})\n\nInformações do usuário nos últimos dias. A contagem é feita apenas quando o bot está ativo. *(Utilize o comando \`=top\` para ver os usuários mais ativos do servidor).*`)
        .addField("Informações do Usuário", `Criado: \`${formatDate('DD/MM/YYYY, às HH:mm:ss', dateCreated)} | ${checkDays(dateCreated)}\`
    Entrou: \`${formatDate('DD/MM/YYYY, às HH:mm:ss', dateJoined)} | ${checkDays(dateJoined)}\`
    ID: \`${message.author.id} \`
    Cargos: ${message.member.roles.cache.size >= 8 ? "Muitos cargos..." : message.member.roles.cache.map(role => role.toString())}
    `)
        .addField("Canais mais Utilizados", `
    Mensagem: ${messageListAct}
    Voz: ${voiceListAct}

    ** **
    `)
        .addField("Mensagem", `
    Global: ${messageListGlobal}
    30 Dias: ${messageList30}
    7 Dias: ${messageList7}
    24 Horas: ${messageList1}

    ** **
    `, true)
        .addField("Voz", `
    Global: ${voiceListGlobal}
    30 Dias: ${voiceList30}
    7 Dias: ${voiceList7}
    24 Horas: ${voiceList1}

    ** **
    `, true);

    message.channel.send(embed);

    function formatDate(template, dateCreated) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
        dateCreated = new Date(dateCreated || Date.now() - new Date().getTimezoneOffset() * 6e4)
        return dateCreated.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
            return template.split(specs[i]).join(item)
        }, template)
    }
    function formatDate(template, dateJoined) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
        dateJoined = new Date(dateJoined || Date.now() - new Date().getTimezoneOffset() * 6e4)
        return dateJoined.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
            return template.split(specs[i]).join(item)
        }, template)
    }
};

exports.conf = {
    commands: ["me", "eu"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'Me',
    description: 'Informações sobre você dentro do servidor.',
    usage: '[=]me',
    kategori: 'stats'
};
