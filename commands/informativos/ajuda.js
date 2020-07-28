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
            .setAuthor(`Proerd ™ - Ajuda`)
            .setDescription(` ${message.author}, enviei meus comandos em seu privado!`)
            .setTimestamp()
            .setColor(15359)
            .setFooter(message.author.tag, message.author.avatarURL)
        message.channel.send(yes)

        const embed = new Discord.MessageEmbed()
            .setAuthor(`Proerd ™ - Ajuda`)
            .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                    .addField(`ℹ️ **Informativos**`, '• `comandos`, `server`, ...')
                    .addField(`🍀 **Diversos**`, '• `ascii`, `bigtext`, ...')
                    .addField(`🦁 **Animais**`, '• `cat`, `dog`, ...')
                    .addField(`🎮 **Mini-Games**`, '• `moeda`, `ppt`, ...')
                    //.addField(`🎶 **Music**`, '• `play`, `pause`, ...')
                    .addField(`👑 **Staff**`, '• `ban`, `kick`, ...')
                    .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp()
            .setColor('WHITE')
        message.author.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
            await msg.react('ℹ️')
            await msg.react('🍀')
            await msg.react('🦁')
            await msg.react('🎮')
            //await msg.react('🎶')
            await msg.react('👑')
            await msg.react("↩")


            const informacao = (reaction, user) => reaction.emoji.name === 'ℹ️' && user.id === message.author.id;
            const diversao = (reaction, user) => reaction.emoji.name === '🍀' && user.id === message.author.id;
            const animais = (reaction, user) => reaction.emoji.name === '🦁' && user.id === message.author.id;
            const minigames = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
            //const music = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
            const staff = (reaction, user) => reaction.emoji.name === '👑' && user.id === message.author.id;

            const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;

            const informacaoL = msg.createReactionCollector(informacao)
            const diversaoL = msg.createReactionCollector(diversao)
            const animaisL = msg.createReactionCollector(animais)
            const minigamesL = msg.createReactionCollector(minigames)
            //const musicL = msg.createReactionCollector(music)
            const staffL = msg.createReactionCollector(staff)

            const backL = msg.createReactionCollector(back)


            backL.on('collect', r => {
                const embedd = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Ajuda`)
                    .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                    .addField(`ℹ️ **Informativos**`, '• `comandos`, `server`, ...')
                    .addField(`🍀 **Diversos**`, '• `ascii`, `bigtext`, ...')
                    .addField(`🦁 **Animais**`, '• `cat`, `dog`, ...')
                    .addField(`🎮 **Mini-Games**`, '• `moeda`, `ppt`, ...')
                    //.addField(`🎶 **Music**`, '• `play`, `pause`, ...')
                    .addField(`👑 **Staff**`, '• `ban`, `kick`, ...')
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                    .setColor("GREEN")
                msg.edit(embedd)
            })

            informacaoL.on('collect', r => {
                const embedinformacao = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Ajuda`)
                    .setDescription(`ℹ️ **Informativos**
                    =ajuda - Exibe um menu de ajuda.
                    =avatar \`<@user>\` - Mostra o avatar de um usuário ou do próprio usuário que usou o comando.
                    =bot - Mostra informações sobre mim.
                    =clima \`<cidade>\` - Mostra o climpa atual da cidade citada.
                    =covid \`<país>\` -  Mostra informações estatísticas sobre o covid-19 no país desejado.
                    =dolar - Mostra a cotação atual do dolar.
                    =mix - Para organizar times.
                    =ping - Mostra a latência bot-servidor.
                    =promo \`<Nome>\` \`<Dia>\` \`<Hora>\` \`<Link>\` - Posta uma promoção de jogo, dlc ou pacote.
                    =server - Mostra informações sobre o servidor.
                    =steam - Fique por dentro das promoções da steam.
                    =steamstat \`<Steam ID>\` - Mostra informações sobre a steam do ID inserido.
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
                    .setAuthor(`Proerd ™ - Ajuda`)
                    .setDescription(`🍀 **Diversos**
                    =8ball \`<texto>\` - Responde qualquer pergunta sua.
                    =ascii \`<texto>\` - Transforma um texto pequeno em ASCII.
                    =bigtext \`<texto>\` - Transforma um texto em emojis maiores.
                    =biscoito \`<@user>\` - Dê um biscoito para alguém. Seja gentil!
                    =calc \`<expressão>\` - Calcula alguma expressão matemática.
                    =dick \`<@user>\` - Descobre o tamanho do dick de alguém.
                    =frase - Mostra alguma frase de alguém inteligênte ou completamente aleatório.
                    =hex \`<#000000>\` - Mostra a cor de qualquer hex desejado.
                    =igor - O Pinscher Malvoso.
                    =imgur \`<anexo>\` - Enviei uma imagem dirato para o imgur.
                    -inverter \`<texto>\` - Inverte um texto.
                    =lembrete \`<tempo>\` \`<texto>\`  - Faz com que o bot te lembre de algo em um tempo determinado.
                    =lenny - Sorteia uma lennyface. ಠ‿↼
                    =morse \`<palavra/frase>\` - Transforme uma palavra ou frase em código morse.
                    =nick \`<novoApelido>\` - Muda seu apelido dentro do servidor.
                    =sugerir \`<sugestão>\` - Dê uma sugestão para o servidor.
                    =tapa \`<@user>\` - Dê um tapa em alguém.
            `)
                    .setColor("GREEN")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embeddiversao)
            })

            animaisL.on('collect', r => {
                const embedanimais = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Ajuda`)
                    .setDescription(`🦁 **Animais**
                    =cat - Foto aleatória de um gatinho.
                    =catfacts - Algum fato aleatório sobre gatos.
                    =dog - Foto aleatória de um doguinho.
                    =goat - Gif aleatório de uma cabra.
                    =raccon - Gif aleatório de um guaxinim.
            `)
                    .setColor("PURPLE")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embedanimais)
            })

            minigamesL.on('collect', r => {
                const embedGames = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Ajuda`)
                    .setDescription(`🎮 **Mini-Games**
                    =forca - Jogue forca no discord. Isso mesmo!
                    =moeda - Tira cara ou coroa.
                    =ppt \`<pedra/papel/tesoura>\` - Jogue pedra, papel ou tesoura contra o bot.
                    =sorte - Faça-o e veja se hoje é seu dia de sorte.
                    =roll \`<tipoDado>\` \`<bonûs>\` - Role os dados. d2, d4, d6, d8, d10, d20 ou d100.
            `)
                    .setColor("ORANGE")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embedGames)
            })

            /*musicL.on('collect', r => {
                const embedmusic = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Ajuda`)
                    .setDescription(`🎶 **Music**
                    =clear - Limpa a fila atual de músicas.
                    =next - Pula a música que está tocando.
                    =np - Mostra a música que está tocando no momento.
                    =p \`<Link>\` ou \`<nome>\` - Começa a tocar uma música ou coloca ela na fila.
                    =play \`<Link>\` ou \`<nome>\` - Começa a tocar uma música ou coloca ela na fila.
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
            })*/

            staffL.on('collect', r => {
                const embeddiversao = new Discord.MessageEmbed()
                    .setAuthor(`Proerd ™ - Ajuda`)
                    .setDescription(`👑 **Staff**
                    =ban \`<@user>\` \`<motivo>\` - Bane um usuário.
                    =grole \`<@user>\` \`<Cargo>\` \`<Motivo>\` - Dá um cargo para algum usuário.
                    =kick \`<@user>\` \`<motivo>\` - Expulsa um usuário.
                    =limpar \`<quantidade>\` - Limpa mensagens de até 2 semanas. (2 a 100)
                    =listban - Receba a lista de usuários banidos no privado.
                    =poll \`<titulo>\` - Cria uma votação de sim ou não para sua enquete.
                    =rrole \`<@user>\` \`<Cargo>\` \`<Motivo>\` - Remove um cargo de algum usuário.
            `)
                    .setColor("RED")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp()
                msg.edit(embeddiversao)
            })
        })
    }