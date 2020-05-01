exports.run = async (client, message, args) => {
    message.channel.send(`Nome: ${message.author.username}\n#: ${message.guild.owner.user.discriminator}\nID: ${message.author.id}\nEntrou: ${message.author.createdAt}`);
}