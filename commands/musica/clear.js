exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "Você precisa estar em um canal de voz primeiro!"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) {
    const embederr = new Discord.MessageEmbed()
      .setTitle(`Ocorreu algum problema...`)
      .setDescription("Contate um admin para mais informações!")
      .addField('Erro:', `\`${err}\``)
      .setColor("ORANGE")
      .setTimestamp()
      .setFooter(message.author.tag)
    return message.channel.send(embederr)
  }
  serverQueue.songs = [];
  const embed = {
    "description": 'Fila de reprodução limpa!',
    "color": "YELLOW",
  };
  message.channel.send({ embed });
};
