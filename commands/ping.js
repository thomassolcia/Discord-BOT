exports.run = async (client, message) => {
    const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('Sua latência com o bot: ' + clientms + 'ms / Latência do bot com Servidor: ' + Math.floor(client.ping) + 'ms');
}