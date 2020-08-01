exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    const embed = {
      "description": 'A música foi pausada!',
      "color": "YELLOW",
    };
    return message.channel.send({ embed }).then(msg => {
      msg.react('⏸️')
    }).then(r => {
      message.delete()
    })
  } else {
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
}

