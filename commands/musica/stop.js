exports.run = (client, message, args) => {
    const queue = client.queues.get(message.guild.id);
    if (!queue) {
        return message.reply("não existe nenhuma música sendo reproduzida");
    }
    queue.songs = [];
    client.queues.set(message.guild.id, queue);
    message.react('🛑');
    queue.dispatcher.end();
};