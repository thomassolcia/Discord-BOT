exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
  init = '**-**';
		const embed = {
			"title": 'Fila de reprodução',
			"color": "YELLOW",
			"fields": [
                {
                    "name": "**Fila de Músicas:**",
                    "value": `[${serverQueue.songs.map(song => init + song.title).join('\n')}](${songInfo.url})`
                },
                {
                    "name": "**Tocando Agora:**",
                    "value":  `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`
                }
                ]
		};
		return message.channel.send({embed});
};
