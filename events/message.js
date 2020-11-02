const Discord = require('discord.js');

module.exports = (client, message) => {
    if (message.author.bot) return;
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const exports = client.commands.get(command);
    //if (message.content.indexOf(client.config.prefix) !== 0) return;
    if (message.channel.type === 'dm') {
        message.reply('Você só pode executar este comando num servidor.')
        return
    } else {
        if (message.content.startsWith(`!`) || message.content.startsWith(`-`) || message.content.startsWith(`=`) || message.content.startsWith(`.`)) {
            if (message.content.startsWith(`=`) && (message.channel.name === 'bot-spam' || message.channel.name === 'log-teste')) {
                try {
                    exports.run(client, message, args);
                } catch (err) {
                    var d = new Date();
                    var n = `${d.getHours()}:${d.getMinutes()}`;
                    console.log(`Ocorreu um erro: ${err}\nComando utilizado: ${message.content}\nHorário: ${n}\n`)
                    const embed = new Discord.MessageEmbed()
                        .setTitle(`Este comando não existe ou o formato está incorreto.`)
                        .setDescription("Digite `=ajuda` para mais informações!")
                        .addField('Erro:', `\`${err}\``)
                        .setColor("BLACK")
                    message.channel.send(embed)
                }
            } else if (message.content.startsWith(`!`) && (message.channel.name === 'bot-spam' || message.channel.name === 'log-teste')) {
                return;
            } else if (message.content.startsWith(`-`) && (message.channel.name === 'bot-spam' || message.channel.name === 'log-teste')) {
                return;
            } else if (message.content.startsWith(`.`) && (message.channel.name === 'bot-spam' || message.channel.name === 'log-teste')) {
                return;
            } else {
                message.delete();
                message.reply("os comandos agora só estão habilitados no canal <#694285200582115418> para evitarmos qualquer tipo de spam e termos uma melhor organização dentro do servidor.").then(msg => msg.delete({ timeout: 5000, reason: 'Feito!' }))
            }
        } else if ((message.content.startsWith(`https://`) || message.content.startsWith(`www.`) || message.content.endsWith(`.com`) || message.content.endsWith(`.br`)) && message.member.hasPermission("KICK_MEMBERS")) {
            return;
        } else if ((message.content.startsWith(`https://`) || message.content.startsWith(`www.`) || message.content.endsWith(`.com`) || message.content.endsWith(`.br`)) && !message.member.hasPermission("KICK_MEMBERS")) {
            if (message.channel.name === 'links') {
                return;
            } else {
                msgLink = message.content;
                message.delete({ timeout: 5000 });
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`LINK REDIRECIONADO`)
                    .setDescription(`**User:** ${message.author.username}\n**Canal:** ${message.channel.name} -> links\n**Link:** <${msgLink}>`)
                    .setFooter(`Links serão sempre redirecionados para este canal para evitar um futuro spam`)
                    .setColor("BLACK")
                client.channels.cache.get(`771483573219754015`).send(embed)
            }
        }
    }
};