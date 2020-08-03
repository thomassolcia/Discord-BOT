exports.run = (client, message, args, ops) => {

    const queue = client.queues.get(message.guild.id);
    if (!queue) {
        return message.reply("não existe nenhuma música sendo reproduzida");
    }
    message.react('⏭️');
    queue.dispatcher.emit('finish');
};