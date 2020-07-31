exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send('Não tem nada tocando neste momento.');
  const embed = {
    "title": 'Tocando agora',
    "description": `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`,
    "color": "YELLOW",
  };
    message.channel.send({embed});
};
