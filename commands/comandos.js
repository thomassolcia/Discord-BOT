exports.run = (client, message, args) => {
    const Discord = require('discord.js');
        const erros = new Discord.MessageEmbed()
            .setAuthor(`Proerd ™ - Erro`, client.user.avatarURL)
            .setDescription(`${message.author}, não consigo enviar mensagem para você, ative suas mensagens diretas!`)
            .setTimestamp()
            .setThumbnail(client.user.avatarURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setColor(15359)

        const yes = new Discord.MessageEmbed()
            .setAuthor(`Proerd ™ - Comandos`)
            .setDescription(` ${message.author}, enviei meus comandos em seu privado!`)
            .setTimestamp()
            .setColor(15359)
            .setFooter(message.author.tag, message.author.avatarURL)
        message.channel.send(yes)

        const embed = new Discord.MessageEmbed()
            .setAuthor(`Proerd ™ - Comandos`)
            .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                    .addField(`⭐ **Informativos**`, '• `ajuda`, `server`, ...')
                    .addField(`😂 **Mini-games**`, '• `roll`, `sorte`, ...')
                    .addField(`🔧 **Staff**`, '• `ban`, `kick`, ...')
                    .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp()
            .setColor(15359)
        message.author.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
            await msg.react('⭐')
            await msg.react('😂')
            await msg.react('🔧')
            await msg.react("↩")


            const informacao = (reaction, user) => reaction.emoji.name === '⭐' && user.id === message.author.id;
            const diversao = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id;
            const staff = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;

            const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;

            const informacaoL = msg.createReactionCollector(informacao)
            const diversaoL = msg.createReactionCollector(diversao)
            const staffL = msg.createReactionCollector(staff)
            const backL = msg.createReactionCollector(back)


            backL.on('collect', r => {
                const embedd = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                    .addField(`⭐ **Informativos**`, '• `ajuda`, `server`, ...')
                    .addField(`😂 **Mini-games**`, '• `roll`, `sorte`, ...')
                    .addField(`🔧 **Staff**`, '• `ban`, `kick`, ...')
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                    .setColor("RANDOM")
                msg.edit(embedd)
            })

            informacaoL.on('collect', r => {
                const embedinformacao = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`⭐ **Informativos**
                    =ajuda - Exibe um menu de ajuda.
                    =server - Mostra informações sobre o servidor.
                    =user - Mostra informações sobre o seu usuário.
                    =bot - Mostra informações sobre mim.
                    =avatar \`<@user>\` - Mostra o avatar de um usuário ou do próprio usuário que usou o comando.
                    =ping - Mostra a latência bot-servidor.
            `)
                    .setColor("RANDOM")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embedinformacao)
            })

            diversaoL.on('collect', r => {
                const embeddiversao = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`😂 **Mini-games**
                            
                    =roll \`<tipoDado>\` - Joga até 5 dados na mesa.
                    =sorte - Faça-o e veja se hoje é seu dia de sorte.
            `)
                    .setColor("RANDOM")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embeddiversao)
            })

            staffL.on('collect', r => {
                const embeddiversao = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`🔧 **Staff**
                            
                    =kick \`<usuário>\` - Expulsa um usuário.
                    =ban \`<usuário>\` - Bane um usuário.
                    =limpar \`<quantidade>\` - Limpa mensagens de até 2 semanas. (2 a 100)
                    =poll \`<titulo>\` - Cria uma votação de sim ou não para sua enquete.
            `)
                    .setColor("RANDOM")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embeddiversao)
            })

        })
    }