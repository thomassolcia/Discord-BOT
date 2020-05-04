exports.run = async (client, message, args) => {

    const avatarList = message.mentions.users.map(user => {
	    return `Avatar do ${user.username} ${user.displayAvatarURL({ format: "png", dynamic: true })}`;
	});
    message.channel.send(avatarList);
}