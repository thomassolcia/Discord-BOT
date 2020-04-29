module.exports = (client, guild) => {
  let myGuild = client.guilds.cache.get('364926866487902208');
  let memberCount = myGuild.memberCount;
  console.log(memberCount);
  let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
  memberCountChannel.setName('Usuários: ' + memberCount)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  client.logger.cmd(`[GUILD LEAVE] ${guild.name} (${guild.id}) Removeu o bot.`);
  
  if (client.settings.has(guild.id)) {
    client.settings.delete(guild.id);
  }
};