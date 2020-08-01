exports.run = (client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("Não tem nada tocando no momento.");
    try {
        init = '**-> **';
        const embed = {
            "title": 'Fila de reprodução',
            "color": "YELLOW",
            "fields": [
                {
                    "name": "**Fila de Músicas:**",
                    "value": `${serverQueue.songs.map(song => init + song.title).join('\n')}`
                },
                {
                    "name": "**Tocando Agora:**",
                    "value": `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`
                }
            ]
        };
        return message.channel.send({ embed });
    } catch{
        init = '**-**';
        const embed = {
            "title": 'Fila de reprodução',
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
