exports.run = (client, message, args) => {
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
    "title": 'Tocando agora',
    "description": `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`,
    "color": "YELLOW",
  };
  message.channel.send({ embed });
};
