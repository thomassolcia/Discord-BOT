const Discord = require('discord.js');
module.exports = async (client, message) => {
    console.log('\n     [COMANDOS PREPARADOS]      \n')
    setInterval(() => {
        var quotes = ['=ajuda', '🎃 Spookytober 🎃', '👻👻']
        client.user.setActivity(
            quotes[Math.floor(quotes.length * Math.random())], { type: 'PLAYING' }
        );
    }, 10000);

    client.on('messageDelete', async msg => {
        if (msg.author.bot) return;
        let logs = await msg.guild.fetchAuditLogs({ type: "MESSAGE_DELETED" });
        let entry = logs.entries.first();
        let messageDeletedEmbed = new Discord.MessageEmbed()
            .setThumbnail(msg.author.avatarURL)
            .setColor("BLACK")
            .setAuthor('MENSAGEM DELETADA')
            .setDescription(`**Autor:** <@${msg.author.id}>\n**Conteúdo:** \`${msg.content}\`\n**Canal:** ${msg.channel}\n**Deletada:** <@${entry.executor.id}>`)
            .setTimestamp()
        let LoggingChannel = msg.guild.channels.cache.find(ch => ch.name === "audit")
        if (!LoggingChannel) return;
        if (msg.author == client.user) return;
        LoggingChannel.send(messageDeletedEmbed);
    });
    client.on('messageUpdate', async (oldMessage, newMessage) => {
        if (oldMessage.author.bot) return;
        let logs = await oldMessage.guild.fetchAuditLogs({ type: "MESSAGE_UPDATE" });
        let entry = logs.entries.first();
        let messageDeletedEmbed = new Discord.MessageEmbed()
            .setThumbnail(oldMessage.author.avatarURL)
            .setColor("BLACK")
            .setAuthor('MENSAGEM EDITADA')
            .setDescription(`**Autor:** <@${oldMessage.author.id}>\n**Antes:** \`${oldMessage.content}\`\n**Depois:** \`${newMessage}\`\n**Canal:** ${oldMessage.channel}\n**Deletada:** <@${entry.executor.id}>`)
            .setTimestamp()
        let LoggingChannel = oldMessage.guild.channels.cache.find(ch => ch.name === "audit")
        if (!LoggingChannel) return;
        if (oldMessage.author == client.user) return;
        LoggingChannel.send(messageDeletedEmbed);
    });
}