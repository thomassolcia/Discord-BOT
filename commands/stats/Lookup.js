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
    if (args[1]) return;
    if (!args[0]) return;

    auth = message.mentions.users.map(user => {
        let dateCreated = user.createdAt;
        let dateJoined = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])).joinedAt;
        let serverUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

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

        let voiceData = vt.get(`stats.${message.guild.id}.${user.id}`) || { voice: 0, channels: {} };
        let messageData = mdb.get(`stats.${message.guild.id}.${user.id}`) || { messages: 0, channels: {} };
        let voiceDataDaily = vtDaily.get(`stats.${message.guild.id}.${user.id}`) || { voice: 0, channels: {} };
        let messageDataDaily = mdbDaily.get(`stats.${message.guild.id}.${user.id}`) || { messages: 0, channels: {} };
        let voiceDataWeekly = vtWeekly.get(`stats.${message.guild.id}.${user.id}`) || { voice: 0, channels: {} };
        let messageDataWeekly = mdbWeekly.get(`stats.${message.guild.id}.${user.id}`) || { messages: 0, channels: {} };
        let voiceDataMonthly = vtMonthly.get(`stats.${message.guild.id}.${user.id}`) || { voice: 0, channels: {} };
        let messageDataMonthly = mdbMonthly.get(`stats.${message.guild.id}.${user.id}`) || { messages: 0, channels: {} };

        let voiceListMonthly = Object.keys(voiceDataMonthly.channels).map(vd => {
            return {
                Id: vd,
                Total: voiceDataMonthly.channels[vd]
            };
        }).sort((a, b) => b.Total - a.Total);
        let sumVoiceListMonthly = voiceListMonthly.reduce((accum, obj) => accum + obj.Total, 0)
        sumVoiceListMonthly = moment.duration(sumVoiceListMonthly, 'milliseconds').format("D[d] H[h] m[min]")

        let messageListMonthly = Object.keys(messageDataMonthly.channels).map(md => {
            return {
                Id: md,
                Total: messageDataMonthly.channels[md]
            };
        }).sort((a, b) => b.Total - a.Total);
        let sumMessageListMonthly = messageListMonthly.reduce((accum, obj) => accum + obj.Total, 0)

        let voiceListWeekly = Object.keys(voiceDataWeekly.channels).map(vd => {
            return {
                Id: vd,
                Total: voiceDataWeekly.channels[vd]
            };
        }).sort((a, b) => b.Total - a.Total);
        let sumVoiceListWeekly = voiceListWeekly.reduce((accum, obj) => accum + obj.Total, 0)
        sumVoiceListWeekly = moment.duration(sumVoiceListWeekly, 'milliseconds').format("D[d] H[h] m[min]")

        let messageListWeekly = Object.keys(messageDataWeekly.channels).map(md => {
            return {
                Id: md,
                Total: messageDataWeekly.channels[md]
            };
        }).sort((a, b) => b.Total - a.Total);
        let sumMessageListWeekly = messageListWeekly.reduce((accum, obj) => accum + obj.Total, 0)

        let voiceListDaily = Object.keys(voiceDataDaily.channels).map(vd => {
            return {
                Id: vd,
                Total: voiceDataDaily.channels[vd]
            };
        }).sort((a, b) => b.Total - a.Total);
        let sumVoiceListDaily = voiceListDaily.reduce((accum, obj) => accum + obj.Total, 0)
        sumVoiceListDaily = moment.duration(sumVoiceListDaily, 'milliseconds').format("D[d] H[h] m[min]")

        let messageListDaily = Object.keys(messageDataDaily.channels).map(md => {
            return {
                Id: md,
                Total: messageDataDaily.channels[md]
            };
        }).sort((a, b) => b.Total - a.Total);
        let sumMessageListDaily = messageListDaily.reduce((accum, obj) => accum + obj.Total, 0)

        let voiceList = Object.keys(voiceData.channels).map(vd => {
            return {
                Id: vd,
                Total: voiceData.channels[vd]
            };
        }).sort((a, b) => b.Total - a.Total);
        let sumVoiceList = voiceList.reduce((accum, obj) => accum + obj.Total, 0)
        sumVoiceList = moment.duration(sumVoiceList, 'milliseconds').format("D[d] H[h] m[min]")

        let messageList = Object.keys(messageData.channels).map(md => {
            return {
                Id: md,
                Total: messageData.channels[md]
            };
        }).sort((a, b) => b.Total - a.Total);
        let sumMessageList = messageList.reduce((accum, obj) => accum + obj.Total, 0)

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

        //Mais Ativos
        voiceListAct = voiceListAct.length > 1 ? voiceListAct.splice(0, 1) : voiceListAct;
        voiceListAct = voiceListAct.map((vd, index) => `${client.channels.cache.has(vd.Id) ? client.channels.cache.get(vd.Id).toString() : "#deleted-channel"}: \`${moment.duration(vd.Total).format("D[d] H[h] m[min]")}\``).join("\n");
        messageListAct = messageListAct.length > 1 ? messageListAct.splice(0, 1) : messageListAct;
        messageListAct = messageListAct.map((md, index) => `${client.channels.cache.has(md.Id) ? client.channels.cache.get(md.Id).toString() : "#deleted-channel"}: \`${md.Total} mensagens\``).join("\n");

        //voiceListAct = voiceListAct.length > 1 ? voiceListAct.splice(0, 1) : voiceListAct;
        //voiceListAct = voiceListAct.map((vd, index) => `\`${moment.duration(vd.Total).format("D[d] H[h] m[min]")}\``).join("\n");
        //messageListAct = messageListAct.length > 1 ? messageListAct.splice(0, 1) : messageListAct;
        //messageListAct = messageListAct.map((md, index) => `\`${md.Total} mensagens\``).join("\n");

        //Mensal
        messageListMonthly = messageListMonthly.length > 1 ? messageListMonthly.splice(0, 1) : messageListMonthly;
        messageListMonthly = messageListMonthly.map((md, index) => `\`${md.Total} mensagens\``).join("\n");
        voiceListMonthly = voiceListMonthly.length > 1 ? voiceListMonthly.splice(0, 1) : voiceListMonthly;
        voiceListMonthly = voiceListMonthly.map((vd, index) => `${index + 1}. \`${moment.duration(vd.Total).format("D[d] H[h] m[min]")}\``).join("\n");

        //Semanal
        messageListWeekly = messageListWeekly.length > 1 ? messageListWeekly.splice(0, 1) : messageListWeekly;
        messageListWeekly = messageListWeekly.map((md, index) => `\`${md.Total} mensagens\``).join("\n");
        voiceListWeekly = voiceListWeekly.length > 1 ? voiceListWeekly.splice(0, 1) : voiceListWeekly;
        voiceListWeekly = voiceListWeekly.map((vd, index) => `${index + 1}. \`${moment.duration(vd.Total).format("D[d] H[h] m[min]")}\``).join("\n");

        //Diário
        messageListDaily = messageListDaily.length > 1 ? messageListDaily.splice(0, 1) : messageListDaily;
        messageListDaily = messageListDaily.map((md, index) => `\`${md.Total} mensagens\``).join("\n");
        voiceListDaily = voiceListDaily.length > 1 ? voiceListDaily.splice(0, 1) : voiceListDaily;
        voiceListDaily = voiceListDaily.map((vd, index) => `${index + 1}. \`${moment.duration(vd.Total).format("D[d] H[h] m[min]")}\``).join("\n");

        //Global
        voiceList = voiceList.length > 1 ? voiceList.splice(0, 1) : voiceList;
        voiceList = voiceList.map((vd, index) => `${index + 1}. \`${moment.duration(vd.Total).format("D[d] H[h] m[min]")}\``).join("\n");
        messageList = messageList.length > 1 ? messageList.splice(0, 1) : messageList;
        messageList = messageList.map((md, index) => `\`${md.Total} mensagens\``).join("\n");
        cargosTamanho = serverUser.roles.cache.size - 3
        if (cargosTamanho >= 2) {
            cargosSize = " cargos"
        } else {
            cargosSize = " cargo"
        }

        if (sumMessageList > 1) {
            qtdMsg = 'mensagens'
        } else {
            qtdMsg = 'mensagem'
        }

        if (sumMessageListDaily > 1) {
            qtdMsgDaily = 'mensagens'
        } else {
            qtdMsgDaily = 'mensagem'
        }

        if (sumMessageListWeekly > 1) {
            qtdMsgWeekly = 'mensagens'
        } else {
            qtdMsgWeekly = 'mensagem'
        }

        if (sumMessageListMonthly > 1) {
            qtdMsgMonthly = 'mensagens'
        } else {
            qtdMsgMonthly = 'mensagem'
        }

        let embed = new Discord.MessageEmbed();
        embed.setColor('BLACK')
            .setTimestamp()
            .setFooter(`Comando =lookup`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            .setThumbnail(user.avatarURL({ dynamic: true }))
            .setDescription(`<@${serverUser.id}> (${serverUser.displayName}#${user.discriminator})\n\nAqui estão as principais informações do usuário mencionado, contagem de mensagens e tempo em canais de voz. As contagens são feitas enquanto o bot estiver ativo. *(Utilize o comando \`=top\` para ver os usuários mais ativos do servidor).*
            
        ** **`)
            .addField("INFORMAÇÕES DO USUÁRIO", `Criado: \`${formatDate('DD/MM/YYYY, às HH:mm:ss', dateCreated)} | ${checkDays(dateCreated)}\`
        Entrou: \`${formatDate('DD/MM/YYYY, às HH:mm:ss', dateJoined)} | ${checkDays(dateJoined)}\`
        UserID: \`${serverUser.id}\`
        Cargos: ${serverUser.roles.cache.size >= 4 ? serverUser.roles.cache.map(role => role.toString()).slice(0, 3) + ', + ' + cargosTamanho + cargosSize : serverUser.roles.cache.map(role => role.toString())}
        
        ** **
        `)
            .addField("CANAIS MAIS UTILIZADOS", `
        Mensagem: ${messageListAct}
        Voz: ${voiceListAct}
    
        ** **
        `)
            .addField("MENSAGEM", `
        __Total__: \`${sumMessageList} ${qtdMsg}\`
        Este Mês: \`${sumMessageListMonthly} ${qtdMsgMonthly}\`
        Esta Semana: \`${sumMessageListWeekly} ${qtdMsgWeekly}\`
        Hoje: \`${sumMessageListDaily} ${qtdMsgDaily}\`
    
        ** **
        `, true)
            .addField("VOZ", `
        __Total__: \`${sumVoiceList}\`
        Este Mês: \`${sumVoiceListMonthly}\`
        Esta Semana: \`${sumVoiceListWeekly}\`
        Hoje: \`${sumVoiceListDaily}\`
    
        ** **
        `, true)
            .addField("ESTATÍSTICAS DO MÊS PASSADO", `
        Mensagens: \`Sem informações ainda...\`
        Voz: \`Sem informações ainda...\`
    
        ** **
        `);

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
    });
};

exports.conf = {
    commands: ["look", "lookup"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'Lookup',
    description: 'Informações sobre qualquer usuário dentro do servidor.',
    usage: '[=]lookup',
    kategori: 'stats'
};
