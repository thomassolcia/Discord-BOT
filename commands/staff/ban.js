const Discord = require('discord.js')
const c = require('../../config.json');

exports.run = async (bot, message, args) => {

    var motivo = args.slice(1).join(" ")
    var member = message.mentions.users.first() || bot.users.get(args[0]);


    if (message.mentions.users.size === 0) {
        return message.reply("Por favor, mencione um usuário para ser banido!");
    }

    let banmember = message.guild.member(message.mentions.users.first());
    if (!banmember) {
        message.reply("Este usuário não pode ser banido!");
    }

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Você não tem permissão para usar este comando`);

    message.channel.send(`Você tem certeza que deseja banir ${member} do seu servidor?`)
        .then(async (msg) => {
            await msg.react("✅")
            await msg.react("⏹")
            const filter = (reaction, user) => ['✅', '⏹'].includes(reaction.emoji.name) && user.id === message.author.id
            const collector = msg.createReactionCollector(filter)
            collector.on("collect", r => {

                switch (r.emoji.name) {
                    case '✅':


                        const embed = new Discord.MessageEmbed()
                            .setDescription(`**Banimento**`)
                            .setColor("RED")
                            .addField("Usuário", `${member}`, true)
                            .addField("Staff", message.author.username, true)
                            .setThumbnail(member.displayAvatarURL)
                            .addField("Motivo", `${motivo}`, true)
                            .setFooter(`${member.id}`)
                            .setTimestamp()

                        message.guild.channels.cache.get('694285200582115418').send(embed);

                        message.guild.member(member).ban(motivo).catch(e => message.channel.send("Essa pessoa não pode ser banida! Ta maluco?"));
                        break;
                    case '⏹':
                        msg.delete().then(message.channel.send(`Essa foi por pouco né ${member}?`));
                        break;
                }
            })
        })
}