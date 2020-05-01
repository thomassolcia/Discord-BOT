exports.run = async (client, message, args) => {
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    message.channel.send(`Nome: ${message.guild.name}\nID: ${message.guild.id}\nOwner: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}\nRegião: ${message.guild.region}\nUsuários: ${memberCount}\nCriado: ${message.channel.guild.createdAt}\nSobrecarga: ${message.guild.verificationLevel}`);
    
}
/*
.addField("Channels", message.guild.channels.size, true)
.addField("Roles", message.guild.roles.size, true)

*/