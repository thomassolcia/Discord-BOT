const Discord = require('discord.js')
exports.run = async(client, message, args) => {
    const amount = args.join(' ');
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`você não tem permissão para usar este comando`);
    if (!amount) return message.reply('Você não inseriu a quantidade de mensagens que deseja apagar.');
    if (isNaN(amount)) return message.reply('Valor inválido! Tente com números.');
    if (amount > 100) return message.reply('O limite é 100 mensagens por vez! Tente diminuir.');
    if (amount < 2) return message.reply('Você precisa deletar pelo menos 1 mensagem fora sua!');
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages)
    })
    const embed = new Discord.MessageEmbed()
        .setDescription(`Quantidade de mensagens excluídas: **${amount}**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Comando =limpar`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
    message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
}

exports.conf = {
    commands: ["limpar", "clean"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'limpar', 
    description: 'Limpa uma quantia de mensagens',
    usage: '[=]limpar',
    kategori: 'staff'
};