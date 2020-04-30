exports.run = async (client, message) => {
	const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('Pong!\n\nSua latência com o bot: ' + clientms + 'ms');
	message.channel.send(`A Latencia da API é ${Math.floor(client.ws.ping)}ms`);
}