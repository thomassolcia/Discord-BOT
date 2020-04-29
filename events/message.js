module.exports = (client, message) => {
  if (message.author.bot) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const args2 = message.content.split(' ').slice(2);
  const cmd = client.commands.get(command);

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  if (!cmd) return;
  cmd.run(client, message, args);
};