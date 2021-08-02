const Discord = require("discord.js");
const Database = require("../Helpers/Database");
const vt = new Database("Database", "Message");
const vtDaily = new Database("Database", "MessageDaily");
const vtWeekly = new Database("Database", "MessageWeekly");
const vtMonthly = new Database("Database", "MessageMonthly");
const config = require("../config.json");
require("dotenv").config();
/**
 * @param {Discord.Message} message
 */
exports.execute = async (message) => {
    if (message.author.bot) return;

    //const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    //const command = args.shift().toLowerCase();
    //const exports = client.commands.get(command);
    //if (message.content.indexOf(client.config.prefix) !== 0) return;
    if (message.channel.type === 'dm') {
        message.reply('Você só pode executar este comando num servidor.')
        return
    } else {
        if (message.content.startsWith(`!`) || message.content.startsWith(`-`) || message.content.startsWith(config.prefix) || message.content.startsWith(`.`)) {
            if (message.content.startsWith(config.prefix) && (message.channel.name === 'bot-spam') || (message.channel.name === 'anúncios')) {
                return;
            } else if (message.content.startsWith(`!`) && message.channel.name === 'bot-spam' || (message.channel.name === 'anúncios')) {
                return;
            } else if (message.content.startsWith(`-`) && message.channel.name === 'bot-spam' || (message.channel.name === 'anúncios')) {
                return;
            } else if (message.content.startsWith(`.`) && message.channel.name === 'bot-spam' || (message.channel.name === 'anúncios')) {
                return;
            } else {
                return;
            }
        } else if ((message.content.startsWith(`https://`) || message.content.startsWith(`www.`) || message.content.endsWith(`.com`) || message.content.endsWith(`.br`)) && message.member.hasPermission("KICK_MEMBERS")) {
            return;
        } else if ((message.content.startsWith(`https://`) || message.content.startsWith(`www.`) || message.content.endsWith(`.com`) || message.content.endsWith(`.br`)) && !message.member.hasPermission("KICK_MEMBERS")) {
            if (message.channel.name === 'links') {
                return;
            } else {
                msgLink = message.content;
                message.delete({ timeout: 5000 });
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`LINK REDIRECIONADO`)
                    .setDescription(`**User:** ${message.author.username}\n**Canal:** ${message.channel.name} -> links\n**Link:** <${msgLink}>`)
                    .setFooter(`Links serão sempre redirecionados para este canal para evitar um futuro spam`)
                    .setColor("BLACK")
                client.channels.cache.get(`771483573219754015`).send(embed)
            }
        }
    }

    vt.add(`stats.${message.guild.id}.${message.author.id}.channels.${message.channel.id}`, 1);
    vt.set(`stats.${message.guild.id}.${message.author.id}.activity`, Date.now());
    vtDaily.add(`stats.${message.guild.id}.${message.author.id}.channels.${message.channel.id}`, 1);
    vtDaily.set(`stats.${message.guild.id}.${message.author.id}.activity`, Date.now());
    vtWeekly.add(`stats.${message.guild.id}.${message.author.id}.channels.${message.channel.id}`, 1);
    vtWeekly.set(`stats.${message.guild.id}.${message.author.id}.activity`, Date.now());
    vtMonthly.add(`stats.${message.guild.id}.${message.author.id}.channels.${message.channel.id}`, 1);
    vtMonthly.set(`stats.${message.guild.id}.${message.author.id}.activity`, Date.now());
};

exports.conf = {
    event: "message"
};
