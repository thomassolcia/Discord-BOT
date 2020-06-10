exports.run = (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel)
      return message.channel.send(
        "Você precisa estar em um canal de voz primeiro!"
      );
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)
      return message.channel.send(
        "Não tem nada tocando no momento."
      );
    serverQueue.songs = [];
    const embed = {
			"description": 'Músicas encerradas!',
			"color": "YELLOW",
		};
		message.channel.send({embed});
    serverQueue.connection.dispatcher.end();
};
