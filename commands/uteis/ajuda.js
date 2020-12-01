exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const erros = new Discord.MessageEmbed()
        .setAuthor(`Proerd ™ - Erro`, client.user.avatarURL)
        .setDescription(`${message.author}, não consigo enviar mensagem para você, ative suas mensagens diretas!`)
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        .setColor('BLACK')

    const yes = new Discord.MessageEmbed()
        .setTitle(`Proerd ™ - Comandos`)
        .setDescription(` ${message.author}, enviei meus comandos em seu privado!`)
        .setTimestamp()
        .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        .setColor('BLACK')
    message.channel.send(yes).then(msg => msg.delete({ timeout: 10000 }))

    const embed = new Discord.MessageEmbed()
        .setTitle(`Proerd ™ - Comandos`)
        .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
        .addField(`🦁 **Animais**`, '• `cat`, `dog`, ...')
        .addField(`ℹ️ **Informativos**`, '• `bot`, `ping`, ...')
        .addField(`👑 **Staff**`, '• `ban`, `kick`, ...')
        .addField(`🔨 **Uteis**`, '• `ajuda`, `clima`, ...')
        .setTimestamp()
        .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
        .setColor('BLACK')
    message.author.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
        await msg.react('🦁')
        await msg.react('ℹ️')
        await msg.react('👑')
        await msg.react('🔨')
        await msg.react("↩")

        const animais = (reaction, user) => reaction.emoji.name === '🦁' && user.id === message.author.id;
        const info = (reaction, user) => reaction.emoji.name === 'ℹ️' && user.id === message.author.id;
        const staff = (reaction, user) => reaction.emoji.name === '👑' && user.id === message.author.id;
        const uteis = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;

        const animaisL = msg.createReactionCollector(animais)
        const infoL = msg.createReactionCollector(info)
        const staffL = msg.createReactionCollector(staff)
        const uteisL = msg.createReactionCollector(uteis)
        const backL = msg.createReactionCollector(back)

        backL.on('collect', r => {
            const embedd = new Discord.MessageEmbed()
                .setTitle(`Proerd ™ - Comandos`)
                .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                .addField(`🦁 **Animais**`, '• `cat`, `dog`, ...')
                .addField(`ℹ️ **Informativos**`, '• `bot`, `ping`, ...')
                .addField(`👑 **Staff**`, '• `ban`, `kick`, ...')
                .addField(`🔨 **Uteis**`, '• `ajuda`, `clima`, ...')
                .setTimestamp()
                .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
                .setColor("BLACK")
            msg.edit(embedd)
        })
        animaisL.on('collect', r => {
            const embedinformacao = new Discord.MessageEmbed()
                .setTitle(`Proerd ™ - Comandos`)
                .setDescription(`🦁 **ANIMAIS**
                -cat *...............................::* Mostra uma imagem aleatória de um gato.
                -catfacts *......................::* Conta um fato aleatório sobre os gatos.
                -dog *..............................::* Mostra uma imagem aleatória de um cachorro.
                -goat *.............................::* Mostra uma imagem aleatória de um bode.
                -raccon *.........................::* Mostra uma imagem aleatória de um guaxinim.
            `)
                .setColor("BLACK")
                .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
                .setTimestamp()
            msg.edit(embedinformacao)
        })
        infoL.on('collect', r => {
            const embeddiversao = new Discord.MessageEmbed()
                .setTitle(`Proerd ™ - Comandos`)
                .setDescription(`ℹ️ **INFORMATIVOS**
                    -bot *..................................::* Mostra informações sobre o bot.
                    -ping *................................::* Mostra o ping.
                    -server *.............................::* Mostra informações sobre o servidor.
                    -user \`<@user>\` *...............::* Mostra informações sobre o usuário.
            `)
                .setColor("BLACK")
                .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
                .setTimestamp()
            msg.edit(embeddiversao)
        })
        staffL.on('collect', r => {
            const embedanimais = new Discord.MessageEmbed()
                .setTitle(`Proerd ™ - Comandos`)
                .setDescription(`👑 **STAFF**
                -ban \`<@user>\` *.....................................::* Bane um usuário do servidor.
                -kick \`<@user>\` *.....................................::* Expulsa um usuário do servidor.
                -limpar \`<number>\` *..............................::* Limpa mensagens de até 2 semanas. (2 a 100)
                -listban *.................................................::* Mostra uma lista com os usuários banidos.
                -mute \`<@user>\` \`<number>\` *...............::* Silencia um usuário pelo tempo determinado.
                -poll *.......................................................::* Cria uma enquete.
                -unmute \`<@user>\` *..............................::* Desmuta um usuário que esta silenciado.
            `)
                .setColor("BLACK")
                .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
                .setTimestamp()
            msg.edit(embedanimais)
        })
        uteisL.on('collect', r => {
            const embedGames = new Discord.MessageEmbed()
                .setTitle(`Proerd ™ - Comandos`)
                .setDescription(`🔨 **UTEIS**
                    -ajuda *...............................::* Recebe essa lista de comandos.
                    -clima \`<cidade>\` *...........::* Mostra o clima em determinada região.
                    -cotacao *..........................::* Mostra a cotação atual do dólar e do euro.
            `)
                .setColor("BLACK")
                .setFooter(`Comando =ajuda`, `https://cdn.discordapp.com/avatars/704392967074349087/9956009aae6e58b3e4c0ef086e98ad9b.png`)
                .setTimestamp()
            msg.edit(embedGames)
        })
    })
}

exports.conf = {
    commands: ["ajuda", "help"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'ajuda',
    description: 'Manda ao usuário uma lista de comandos disponívels',
    usage: '[=]ajuda',
    kategori: 'uteis'
};