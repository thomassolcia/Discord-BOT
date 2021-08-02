const Discord = require("discord.js");
module.exports = async (client) => {
    try {
        const { GiveawaysManager } = require('discord-giveaways');
        const manager = new GiveawaysManager(client, {
            storage: './giveaways.json',
            updateCountdownEvery: 10000,
            hasGuildMembersIntent: false,
            default: {
                botsCanWin: false,
                exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
                embedColor: '#FF0000',
                reaction: '🎉'
            }
        });
        client.giveawaysManager = manager;
    } catch (err) {
        console.log(err);
    }
};