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
  
  if (!args[0]) {
    const embed = {
      "description": 'O volume atual é: **' + serverQueue.volume + '%**',
      "color": "YELLOW",
    };
    message.channel.send({ embed });
  } else {
    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    const embed = {
      "description": 'Eu alterei o volume para: **' + args[0] + '%**',
      "color": "YELLOW",
    };
    message.channel.send({ embed });
  }
};
