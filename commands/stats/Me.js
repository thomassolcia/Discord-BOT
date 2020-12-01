const Discord = require("discord.js");
const Database = require("../../Helpers/Database");
const vt = new Database("Database", "Voice");
const mdb = new Database("Database", "Message");
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

    let voiceData = vt.get(`stats.${message.guild.id}.${message.author.id}`) || { voice: 0, channels: {} };
    let messageData = mdb.get(`stats.${message.guild.id}.${message.author.id}`) || { messages: 0, channels: {} };

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

    voiceList = voiceList.length > 10 ? voiceList.splice(0, 10) : voiceList;
    voiceList = voiceList.map((vd, index) => `${index + 1}. ${client.channels.cache.has(vd.Id) ? client.channels.cache.get(vd.Id).toString() : "#deleted-channel"}: \`${moment.duration(vd.Total).format("H [h,] m [min]")}\``).join("\n");
    messageList = messageList.length > 10 ? messageList.splice(0, 10) : messageList;
    messageList = messageList.map((md, index) => `${index + 1}. ${client.channels.cache.has(md.Id) ? client.channels.cache.get(md.Id).toString() : "#deleted-channel"}: \`${md.Total} mensagens\``).join("\n");
    let embed = new Discord.MessageEmbed();
    embed.setColor('BLACK')
        .setTimestamp()
        .setFooter(`Comando =me`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        .setThumbnail(message.author.avatarURL({ dynamic: true }))
        .setDescription(`<@${message.member.id}> (${message.member.displayName}#${message.author.discriminator})\n\nInformações do usuário nos últimos dias. A contagem é feita apenas quando o bot está ativo. *(Utilize o comando \`=top\` para ver os usuários mais ativos do servidor).*`)
        .addField("Informações do Usuário", ` 
    
    Criado: \`${formatDate('DD/MM/YYYY, às HH:mm:ss', dateCreated)} | ${checkDays(dateCreated)}\`
    Entrou: \`${formatDate('DD/MM/YYYY, às HH:mm:ss', dateJoined)} | ${checkDays(dateJoined)}\`
    ID: \`${message.author.id} \`
    Cargos: ${message.member.roles.cache.size >= 8 ? "Muitos cargos..." : message.member.roles.cache.map(role => role.toString())}
    `)
        .addField("Mensagens", `
    Ultima Atividade: ${new Date(messageData.activity).toLocaleDateString()}

    ** **${messageList}
    `, true)
        .addField("Voz", `
    Ultima Atividade: ${new Date(voiceData.activity).toLocaleDateString()}

    ** **${voiceList}
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
