exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel) {
    const embederr = new Discord.MessageEmbed()
      .setTitle(`Ocorreu algum problema...`)
      .setDescription("Contate um admin para mais informações!")
      .addField('Erro:', `\`${err}\``)
      .setColor("ORANGE")
      .setTimestamp()
      .setFooter(message.author.tag)
    return message.channel.send(embederr).then(msg => {
      msg.react('❌')
    }).then(r => {
      message.delete()
    })
  }
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) {
    const embederr = new Discord.MessageEmbed()
      .setTitle(`Ocorreu algum problema...`)
      .setDescription("Contate um admin para mais informações!")
      .addField('Erro:', `\`${err}\``)
      .setColor("ORANGE")
      .setTimestamp()
      .setFooter(message.author.tag)
    return message.channel.send(embederr).then(msg => {
      msg.react('❌')
    }).then(r => {
      message.delete()
    })
  }
  const embed = {
    "description": 'Pulando para a próxima música!',
    "color": "YELLOW",
  };
  message.channel.send({ embed }).then(msg => {
    msg.react('⏭️')
  }).then(r => {
    message.delete()
  });
  serverQueue.connection.dispatcher.end();
};
