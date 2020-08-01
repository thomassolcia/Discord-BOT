exports.run = async (client, message, args) => {
    const { channel } = message.member.voice;
    channel.leave();
}