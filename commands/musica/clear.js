exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "Você precisa estar em um canal de voz primeiro!"
    );
  let queue = client.queues.get(message.guild.id);
  if (!queue)
    return message.channel.send(
      "Não tem nada tocando no momento."
    );
  queue.songs = [];
  message.react('✔️')
};
