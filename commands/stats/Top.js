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
    const voiceData = vt.get(`stats.${message.guild.id}`) || undefined;
    const messageData = mdb.get(`stats.${message.guild.id}`) || undefined;

    let messageList = "Sem informações.";
    if (messageData) {
        messageList = Object.keys(messageData || {}).map(md => {
            return {
                Id: md,
                Total: Object.values(messageData[md].channels || {}).reduce((a, b) => a + b, 0)
            };
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `${index + 1}. <@${user.Id}> \`${user.Total} mensagens\``).join("\n");
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

    let embed = new Discord.MessageEmbed();
    embed.setColor('BLACK')
        .setTimestamp()
        .setFooter(`Comando =me`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        .setThumbnail(message.author.avatarURL({ dynamic: true }))
        .setDescription(`Aqui está o ranking geral do servidor`)
        .addField("Voz | Ranking", `** **\n${voiceList}`)
        .addField("Mensagem | Ranking", `** **\n${messageList}`);
    message.channel.send(embed);
};

exports.conf = {
    commands: ["top", "ranking"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'Top',
    description: 'Ranking do servidor',
    usage: '[=]top',
    category: 'stats'
};
