exports.run = (client, message, args) => {
    const queue = client.queues.get(message.guild.id);
    if (!queue) {
        return message.reply("não existe nenhuma música sendo reproduzida");
    }
    const volume = Number(args.join(" "));
    if (isNaN(volume) || volume < 0 || volume > 10) {
        return message.reply("o volume deve ser um valor entre 0 e 10").then(msg1 => { msg1.delete({ timeout: 5000 }) });
    } else if (!args[0]) {
        return message.reply(`o volume atual é: ${queue.volume}`).then(msg => { msg.delete({ timeout: 5000 }) });
    }
    queue.dispatcher.setVolume(volume / 10);
    queue.volume = volume;
    client.queues.set(message.guild.id, queue);
};