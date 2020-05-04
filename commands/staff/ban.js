exports.run = async (client, message, args) => {

    var motivo = args.slice(1).join(" ")
    var member = message.mentions.users.first() || client.users.get(args[0]);


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
                            .setColor("RANDOM")
                            .addField("Usuário", `${member}`, true)
                            .addField("Staff", message.author.username, true)
                            .setThumbnail(member.displayAvatarURL)
                            .addField("Motivo", `${motivo}`, true)
                            .setFooter(`${member.id}`)
                            .setTimestamp()

                        message.guild.channels.get(c.punishChannel).send(embed);

                        message.guild.member(member).ban(motivo).catch(e => message.channel.send("Falha ao banir. Deu sorte em!"));
                        break;
                    case '⏹':
                        msg.delete().then(message.channel.send(`Essa foi por pouco né ${member}?`));
                        break;
                }
            })
        })
}