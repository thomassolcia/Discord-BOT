exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      'Você precisa estar em um canal de voz primeiro!'
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send('Não tem nada tocando no momento.');
  if (!args[0]){
    const embed = {
      "description": 'O volume atual é: **' + serverQueue.volume + '%**',
      "color": "YELLOW",
    };
  message.channel.send({embed});
  }else{
  serverQueue.volume = args[0]; 
  serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
  const embed = {
    "description": 'Eu alterei o volume para: **' + args[0] + '%**',
    "color": "YELLOW",
  };
  message.channel.send({embed});
}
};
