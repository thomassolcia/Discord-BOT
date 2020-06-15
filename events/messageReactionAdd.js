module.exports = async (client, messageReaction, user) => {

    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);

    const verify = message.guild.roles.cache.get('720173388269879319');

    if (messageReaction.emoji.name === '✅' && message.channel.id === '450391023403794472'){
        member.roles.add(verify).catch(console.error);
    }else if (messageReaction.emoji.name === '❌' && message.channel.id === '450391023403794472'){
        member.roles.remove(verify).catch(console.error);
    }
}