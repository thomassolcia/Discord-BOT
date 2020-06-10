exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    const embed = {
      "description": 'A música foi pausada!',
      "color": "YELLOW",
    };
    return message.channel.send({embed});
  }
  const embed1 = {
    "description": 'Não tem nada tocando, você é esquizofrênico?',
    "color": "YELLOW",
  };
return message.channel.send({embed1});
};
