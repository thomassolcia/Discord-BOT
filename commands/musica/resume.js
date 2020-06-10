exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && !serverQueue.playing) {
    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    const embed = {
      "description": 'Voltando a tocar a música!',
      "color": "YELLOW",
      };
      return message.channel.send({embed});
  }
  const embed1 = {
    "description": 'Não tinha nada tocando aqui.',
    "color": "YELLOW",
    };
    return message.channel.send({embed1});
};
