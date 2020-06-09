module.exports = (client, message) => {

  const swearWords = ["mongo", 'mongoloide', 'mongolóide', 'mongólico', 'monogolico'];
  if (swearWords.some(word => message.content.includes(word))) {
  message.reply("Cuidado! A `m-word` não está habilitada neste servidor. Não insista!");
  message.delete().catch(e => {});
  }

  if (message.author.bot) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const exports = client.commands.get(command);

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  if(message.channel.type === 'dm') {
		message.reply('Você só pode executar este comando num servidor.')
  } 
  
  const musicBot = ["p", "play", 'np', 'skip', 'pause', 'next', 'stop', 'queue', 'volume', 'resume'];
  if (musicBot.some(word1 => message.content.includes(word1))) return;
  
  const comandos = ['ban', 'kick', 'limpar', 'listban', 'poll', 'moeda', 'ppt', 'roll', 'sorte', 'avatar', 'bot', 'clima', 'comandos', 'ping', 'server', 'user', 'users', 'year', 'cat', 'dog', 'goat', 'raccon', '8ball', 'ascii', 'bigtext', 'biscoito', 'calc', 'dick', 'frase', 'hex', 'igor', 'imgur', 'inverter', 'lembrete', 'lenny', 'morse', 'nick', 'sugerir', 'tapa', "play", 'np', 'skip', 'pause', 'next', 'stop', 'queue', 'volume', 'resume'];

  if (message.channel.name === 'bot-spam' || message.member.hasPermission("BAN_MEMBERS")){
    try {
      exports.run(client, message, args);
    }
    catch(err) {
      message.reply('este comando não existe ou o formato está incorreto. Digite `=comandos` para mais informações!');
    }
  }else{
    message.delete();
    message.reply("os comandos agora só estão habilitados no canal <#694285200582115418> para evitarmos qualquer tipo de spam e termos uma melhor organização dentro do servidor.")
  }  
};