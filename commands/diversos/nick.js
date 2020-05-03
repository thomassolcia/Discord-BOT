exports.run = async (client, message, args) => {
    const amount = args.join(' ');
    message.member.setNickname(amount);
    message.reply(' seu apelido foi alterado para ' + amount);
}