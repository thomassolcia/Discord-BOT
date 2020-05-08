module.exports = (client, message) => {

  const swearWords = ["mongo", 'mongoloide', 'mongolóide', 'mongólico', 'monogolico'];
  if (swearWords.some(word => message.content.includes(word))) {
  message.reply("Cuidado! A `m-word` não está habilitada neste servidor. Não insista!");
  message.delete().catch(e => {});
  }

  if (message.author.bot) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  if (!cmd) return;

  if(message.channel.type === 'dm') {
		message.reply('Você só pode executar este comando num servidor.')
	} else {
    cmd.run(client, message, args);
  }
};