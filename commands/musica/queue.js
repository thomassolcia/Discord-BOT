exports.run = (client, message, args) => {
    let queue = client.queues.get(message.guild.id);
    if (!queue) return message.channel.send("Não tem nada tocando no momento.");
    try {
        init = 0;
        const embed = {
            "color": "YELLOW",
            "fields": [
                {
                    "name": "**Fila de Músicas:**",
                    "value": `${queue.songs.map(song => `[${++init}]. ` + song.title).join('\n')}`
                },
                {
                    "name": "**Tocando Agora:**",
                    "value": `**[${queue.songs[0].title}](${queue.songs[0].url})**`
                }
            ]
        };
        return message.channel.send({ embed });
    } catch{
        init = '**-**';
        const embed = {
            "color": "YELLOW",
            "fields": [
                {
                    "name": "**Fila de Músicas:**",
                    "value": `Vazia...`
                }
            ]
        };
        return message.channel.send({ embed });
    }
};
