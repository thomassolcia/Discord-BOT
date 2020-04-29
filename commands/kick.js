exports.run = (client, message, [mention, ...reason]) => {
  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
  return message.reply("Você não tem permissão para isto!");    

  if (message.mentions.members.size === 0)
    return message.reply("Você deve mencionar o usuário a levar Kick");    
  
  const kickMember = message.mentions.members.first();
  
  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`${member.user.username} foi expulso da clínica de reabilitação. Tava dando muito trabalho!`);
  });
};