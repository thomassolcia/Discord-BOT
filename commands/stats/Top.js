const Discord = require("discord.js");
const Database = require("../../Helpers/Database");
const vt = new Database("Database", "Voice");
const mdb = new Database("Database", "Message");
const vtWeekly = new Database("Database", "VoiceWeekly");
const mdbWeekly = new Database("Database", "MessageWeekly");
const vtDaily = new Database("Database", "VoiceDaily");
const mdbDaily = new Database("Database", "MessageDaily");
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
    const voiceData = vt.get(`stats.${message.guild.id}`) || undefined;
    const messageData = mdb.get(`stats.${message.guild.id}`) || undefined;
    const voiceDataDaily = vtDaily.get(`stats.${message.guild.id}`) || undefined;
    const messageDataDaily = mdbDaily.get(`stats.${message.guild.id}`) || undefined;
    const voiceDataWeekly = vtWeekly.get(`stats.${message.guild.id}`) || undefined;
    const messageDataWeekly = mdbWeekly.get(`stats.${message.guild.id}`) || undefined;
    const voiceDataMonthly = vtMonthly.get(`stats.${message.guild.id}`) || undefined;
    const messageDataMonthly = mdbMonthly.get(`stats.${message.guild.id}`) || undefined;

    let messageListMonthly = "Sem informações.";
    if (messageDataMonthly) {
        messageListMonthly = Object.keys(messageDataMonthly || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageDataMonthly[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${user.Total} msgs\``).join("\n");
    }

    let voiceListMonthly = "Sem informações.";
    if (voiceDataMonthly) {
        voiceListMonthly = Object.keys(voiceDataMonthly || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(voiceDataMonthly[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${moment.duration(user.Total).format("H [h,] m [min]")}\``).join("\n");
    }

    let messageListWeekly = "Sem informações.";
    if (messageDataWeekly) {
        messageListWeekly = Object.keys(messageDataWeekly || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageDataWeekly[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${user.Total} msgs\``).join("\n");
    }

    let voiceListWeekly = "Sem informações.";
    if (voiceDataWeekly) {
        voiceListWeekly = Object.keys(voiceDataWeekly || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(voiceDataWeekly[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${moment.duration(user.Total).format("H [h,] m [min]")}\``).join("\n");
    }

    let messageListDaily = "Sem informações.";
    if (messageDataDaily) {
        messageListDaily = Object.keys(messageDataDaily || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageDataDaily[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${user.Total} msgs\``).join("\n");
    }

    let voiceListDaily = "Sem informações.";
    if (voiceDataDaily) {
        voiceListDaily = Object.keys(voiceDataDaily || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(voiceDataDaily[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${moment.duration(user.Total).format("H [h,] m [min]")}\``).join("\n");
    }

    let messageList = "Sem informações.";
    if (messageData) {
        messageList = Object.keys(messageData || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageData[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${user.Total} msgs\``).join("\n");
    }

    let voiceList = "Sem informações.";
    if (voiceData) {
        voiceList = Object.keys(voiceData || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(voiceData[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${moment.duration(user.Total).format("H [h,] m [min]")}\``).join("\n");
    }

    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =top global`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setDescription(`*RANKING GLOBAL DO SERVIDOR*`)
            .addField("Mensagens", `** **\n${messageList}`, true)
            .addField("Voz", `** **\n${voiceList}`, true)
        message.channel.send(embed);
    } else if (args[0] == 'global' || args[0] == 'g') {
        const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =top global`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setDescription(`*RANKING GLOBAL DO SERVIDOR*`)
            .addField("Mensagens", `** **\n${messageList}`, true)
            .addField("Voz", `** **\n${voiceList}`, true)
        message.channel.send(embed);
    } else if (args[0] == 'diario' || args[0] == 'daily' || args[0] == 'd') {
        const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =top daily`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setDescription(`*RANKING DIÁRIO DO SERVIDOR*`)
            .addField("Mensagens", `** **\n${messageListDaily}`, true)
            .addField("Voz", `** **\n${voiceListDaily}`, true);
        message.channel.send(embed);
    } else if (args[0] == 'semanal' || args[0] == 'weekly' || args[0] == 's' || args[0] == 'w') {
        const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =top weekly`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setDescription(`*RANKING SEMANAL DO SERVIDOR*`)
            .addField("Mensagens", `** **\n${messageListWeekly}`, true)
            .addField("Voz", `** **\n${voiceListWeekly}`, true);
        message.channel.send(embed);
    } else if (args[0] == 'mensal' || args[0] == 'monthly' || args[0] == 'm') {
        const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =top monthly`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setDescription(`*RANKING MENSAL DO SERVIDOR*`)
            .addField("Mensagens", `** **\n${messageListMonthly}`, true)
            .addField("Voz", `** **\n${voiceListMonthly}`, true);
        message.channel.send(embed);
    }
};

exports.conf = {
    commands: ["top", "ranking"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'Top',
    description: 'Ranking do servidor [BETA]',
    usage: '[=]top',
    category: 'stats'
};
