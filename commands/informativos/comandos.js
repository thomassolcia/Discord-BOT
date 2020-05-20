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
                    .addField(`ℹ️ **Informativos**`, '• `comandos`, `server`, ...')
                    .addField(`🍀 **Diversos**`, '• `roll`, `sorte`, ...')
                    .addField(`🦁 **Staff**`, '• `ban`, `kick`, ...')
                    .addField(`🎶 **Music**`, '• `play`, `pause`, ...')
                    .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp()
            .setColor('WHITE')
        message.author.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
            await msg.react('ℹ️')
            await msg.react('🍀')
            await msg.react('🦁')
            await msg.react('🎶')
            await msg.react("↩")


            const informacao = (reaction, user) => reaction.emoji.name === 'ℹ️' && user.id === message.author.id;
            const diversao = (reaction, user) => reaction.emoji.name === '🍀' && user.id === message.author.id;
            const staff = (reaction, user) => reaction.emoji.name === '🦁' && user.id === message.author.id;
            const music = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;

            const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;

            const informacaoL = msg.createReactionCollector(informacao)
            const diversaoL = msg.createReactionCollector(diversao)
            const staffL = msg.createReactionCollector(staff)
            const musicL = msg.createReactionCollector(music)
            const backL = msg.createReactionCollector(back)


            backL.on('collect', r => {
                const embedd = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                    .addField(`ℹ️ **Informativos**`, '• `comandos`, `server`, ...')
                    .addField(`🍀 **Diversos**`, '• `roll`, `sorte`, ...')
                    .addField(`🦁 **Staff**`, '• `ban`, `kick`, ...')
                    .addField(`🎶 **Music**`, '• `play`, `pause`, ...')
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                    .setColor("GREEN")
                msg.edit(embedd)
            })

            informacaoL.on('collect', r => {
                const embedinformacao = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`ℹ️ **Informativos**
                    =avatar \`<@user>\` - Mostra o avatar de um usuário ou do próprio usuário que usou o comando.
                    =bot - Mostra informações sobre mim.
                    =comandos - Exibe um menu de ajuda.
                    =ping - Mostra a latência bot-servidor.
                    =server - Mostra informações sobre o servidor.
                    =tempo \`<cidade>\` - Mostra o climpa atual da cidade citada.
                    =user - Mostra informações sobre o seu usuário.
                    =users - Mostra informações gerais sobre os usuários do canal.
                    =year - Mostra quanto tempo falta até o fim do ano. 
            `)
                    .setColor("BLUE")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embedinformacao)
            })

            diversaoL.on('collect', r => {
                const embeddiversao = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`🍀 **Diversos**
                    =ascii \`<texto>\` - Transforma um texto pequeno em ASCII.
                    =bigtext \`<texto>\` - Transforma um texto em emojis maiores.
                    =biscoito \`<@user>\` - Dê um biscoito para alguém. Seja gentil!
                    =cat - Foto aleatória de um gatinho.
                    =dog - Foto aleatória de um doguinho.
                    =hex \`<#000000>\` - Mostra a cor de qualquer hex desejado.
                    =igor - O Pinscher Malvoso.
                    =imgur \`<anexo>\` - Enviei uma imagem dirato para o imgur.
                    -inverter \`<texto>\` - Inverte um texto.
                    =lembrete \`<tempo>\` \`<texto>\`  - Faz com que o bot te lembre de algo em um tempo determinado.
                    =lenny - Sorteia uma lennyface. ಠ‿↼
                    =moeda - Tira cara ou coroa.
                    =morse \`<palavra/frase>\` - Transforme uma palavra ou frase em código morse.
                    =nick \`<novoApelido>\` - Muda seu apelido dentro do servidor.
                    =roll \`<tipoDado>\` - Role os dados. d2, d4, d6, d8, d10, d20 ou d100.
                    =sorte - Faça-o e veja se hoje é seu dia de sorte.
                    =sugerir \`<sugestão>\` - Dê uma sugestão para o servidor.
                    =tapa \`<@user>\` - Dê um tapa em alguém.
            `)
                    .setColor("GREEN")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embeddiversao)
            })

            staffL.on('collect', r => {
                const embeddiversao = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`🦁 **Staff**
                    =ban \`<@user>\` \`<motivo>\` - Bane um usuário.
                    =kick \`<@user>\` \`<motivo>\` - Expulsa um usuário.
                    =limpar \`<quantidade>\` - Limpa mensagens de até 2 semanas. (2 a 100)
                    =listban - Receba a lista de usuários banidos no privado.
                    =poll \`<titulo>\` - Cria uma votação de sim ou não para sua enquete.
            `)
                    .setColor("RED")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embeddiversao)
            })

            musicL.on('collect', r => {
                const embedmusic = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Comandos`)
                    .setDescription(`🎶 **Music**
                    =np - Mostra a música que está tocando no momento.
                    =play \`<Link>\` - Começa a tocar uma música ou coloca ela na fila.
                    =pause - Pausa a música que está tocando.
                    =queue - Mostra as músicas que estão na fila.
                    =resume - Volta a tocar a música que foi pausada.
                    =skip - Pula a música que está tocando.
                    =stop - Para de tocar as músicas e o bot sai da sala.
                    =volume - Controla o volume geral de reprodução. Não é o mesmo volume do servidor.
            `)
                    .setColor("YELLOW")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embedmusic)
            })
        })
    }