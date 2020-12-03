const Discord = require("discord.js");
const Database = require("../Helpers/Database");
const vt = new Database("Database", "Voice");
const vtDaily = new Database("Database", "VoiceDaily");
const vtWeekly = new Database("Database", "VoiceWeekly");
const vtMonthly = new Database("Database", "VoiceMonthly");

const Activites = new Map();

/**
 * @param {Discord.VoiceState} oldState
 * @param {Discord.VoiceState} newState
 */
exports.execute = async (oldState, newState) => {
    if ((oldState.member && oldState.member.user.bot) || (newState.member && newState.member.user.bot)) return;
    if (!oldState.channelID && newState.channelID) {
        Activites.set(oldState.id, Date.now());
    }
    let data;
    if (!Activites.has(oldState.id)) {
        data = Date.now();
        Activites.set(oldState.id, data);
    }
    else
        data = Activites.get(oldState.id);
    let duration = Date.now() - data;
    if (oldState.channelID && !newState.channelID) {
        Activites.delete(oldState.id);
        //Global
        vt.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
        vt.set(`stats.${oldState.guild.id}.${oldState.id}.activity`, Date.now());
        //Daily
        vtDaily.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
        vtDaily.set(`stats.${oldState.guild.id}.${oldState.id}.activity`, Date.now());
        //Weekly
        vtWeekly.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
        vtWeekly.set(`stats.${oldState.guild.id}.${oldState.id}.activity`, Date.now());
        //Monthly
        vtMonthly.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
        vtMonthly.set(`stats.${oldState.guild.id}.${oldState.id}.activity`, Date.now());
    }
    else if (oldState.channelID && newState.channelID) { // This user has changes the channel.
        Activites.set(oldState.id, Date.now());
        //Global
        vt.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
        vt.set(`stats.${oldState.guild.id}.${oldState.id}.activity`, Date.now());
        //Daily
        vtDaily.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
        vtDaily.set(`stats.${oldState.guild.id}.${oldState.id}.activity`, Date.now());
        //Weekly
        vtWeekly.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
        vtWeekly.set(`stats.${oldState.guild.id}.${oldState.id}.activity`, Date.now());
        //Monthly
        vtMonthly.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
        vtMonthly.set(`stats.${oldState.guild.id}.${oldState.id}.activity`, Date.now());
    }
};

exports.conf = {
    event: "voiceStateUpdate"
};
