const Discord = require('discord.js');
exports.run = async (client, message) => {
    message.delete()
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg => msg.delete(8000))
    try {
        let i = 0;
        message.guild.fetchBans().then(async (bans) => {
            const embedConfirm = new Discord.MessageEmbed()
                .setDescription('Enviei a lista de bans no seu privado!')
                .setColor("RED")
                .setTimestamp()
                .setFooter(`Comando =listban`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
            message.channel.send(embedConfirm).then(msg => msg.delete({ timeout: 5000 }))
            bans.forEach(async (ban) => {
                i++;
                const embed = new Discord.MessageEmbed()
                    .setDescription(`${i}. Usuário: <@${ban.user.id}> | ID: ${ban.user.id}`)
                    .setColor("RED")
                    .setTimestamp()
                    .setFooter(`Comando =listban`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
                await message.author.send(embed)
            });
        });
    } catch (err) {
        message.channel.send('Um erro aconteceu!\n' + err).catch();
    }
};

exports.conf = {
    commands: ["listban", "banidos"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'listban',
    description: 'Mostra a lista de usuários banidos do servidor',
    usage: '[=]listban',
    kategori: 'staff'
};