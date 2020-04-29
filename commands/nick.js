exports.run = async (client, message, args) => {
    message.member.setNickname(args);
    message.reply(' Seu apelido foi alterado para ' + args);
}