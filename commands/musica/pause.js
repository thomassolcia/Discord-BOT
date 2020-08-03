exports.run = (client, message, args) => {
    const queue = client.queues.get(message.guild.id);
    if (!queue) {
        return message.reply("não existe nenhuma música sendo reproduzida");
    }
    message.react('⏸️');
    queue.dispatcher.pause();
};