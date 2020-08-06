const search = require("yt-search");
const ytdl = require("ytdl-core-discord");
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const nameUser = message.author.id;
    const s = args.join(" ");
    try {
        search(s, (err, result) => {
            if (err) {
                const embedError = new Discord.MessageEmbed()
                    .setTitle('Um erro ocorreu!')
                    .setDescription(`Contate um admin para mais informações.`)
                    .addField('Erro:', '`' + err + '`')
                    .setColor("YELLOW")
                message.channel.send(embedError)
                console.log(err)
            } else if (result && result.videos.length > 0) {
                const embedSelect = new Discord.MessageEmbed()
                    .setTitle('Seleção de Músicas')
                    .addField(`1. ${result.videos[0].title}`, `[Link](${result.videos[0].url}) - ${result.videos[0].duration} - ${result.videos[0].views} views`)
                    .addField(`2. ${result.videos[1].title}`, `[Link](${result.videos[1].url}) - ${result.videos[1].duration} - ${result.videos[1].views} views`)
                    .addField(`3. ${result.videos[2].title}`, `[Link](${result.videos[2].url}) - ${result.videos[2].duration} - ${result.videos[2].views} views`)
                    .addField(`4. ${result.videos[3].title}`, `[Link](${result.videos[3].url}) - ${result.videos[3].duration} - ${result.videos[3].views} views`)
                    .addField(`5. ${result.videos[4].title}`, `[Link](${result.videos[4].url}) - ${result.videos[4].duration} - ${result.videos[4].views} views`)
                    .setColor("YELLOW")
                message.channel.send(embedSelect).then(msg => {
                    msg.react('1️⃣').then(r => {
                        msg.react('2⃣').then(s => {
                            msg.react('3⃣').then(s => {
                                msg.react('4⃣').then(s => {
                                    msg.react('5⃣').then(s => {
                                        msg.react('❌')
                                    });

                                    // Filters
                                    const oneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id
                                    const twoFilter = (reaction, user) => reaction.emoji.name === '2⃣' && user.id === message.author.id
                                    const threeFilter = (reaction, user) => reaction.emoji.name === '3⃣' && user.id === message.author.id
                                    const fourFilter = (reaction, user) => reaction.emoji.name === '4⃣' && user.id === message.author.id
                                    const fiveFilter = (reaction, user) => reaction.emoji.name === '5⃣' && user.id === message.author.id
                                    const cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id

                                    const one = msg.createReactionCollector(oneFilter, { timer: 5000 })
                                    const two = msg.createReactionCollector(twoFilter, { timer: 5000 })
                                    const three = msg.createReactionCollector(threeFilter, { timer: 5000 })
                                    const four = msg.createReactionCollector(fourFilter, { timer: 5000 })
                                    const five = msg.createReactionCollector(fiveFilter, { timer: 5000 })
                                    const cancel = msg.createReactionCollector(cancelFilter, { timer: 5000 })

                                    one.on('collect', (r, u) => {
                                        const song = result.videos[0];
                                        if (queue) {
                                            queue.songs.push(song);
                                            client.queues.set(message.guild.id, queue);
                                        } else playSong(client, message, song);
                                        const embed1 = new Discord.MessageEmbed()
                                            .setDescription(`[${result.videos[0].title}](${result.videos[0].url}) adicionada na fila!`)
                                            .setColor("YELLOW")
                                        message.channel.send(embed1)
                                        msg.delete()
                                    })

                                    two.on('collect', (r, u) => {
                                        const song = result.videos[1];
                                        if (queue) {
                                            queue.songs.push(song);
                                            client.queues.set(message.guild.id, queue);
                                        } else playSong(client, message, song);
                                        const embed1 = new Discord.MessageEmbed()
                                            .setDescription(`[${result.videos[1].title}](${result.videos[1].url}) adicionada na fila!`)
                                            .setColor("YELLOW")
                                        message.channel.send(embed1)
                                        msg.delete()
                                    })

                                    three.on('collect', (r, u) => {
                                        const song = result.videos[2];
                                        if (queue) {
                                            queue.songs.push(song);
                                            client.queues.set(message.guild.id, queue);
                                        } else playSong(client, message, song);
                                        const embed1 = new Discord.MessageEmbed()
                                            .setDescription(`[${result.videos[2].title}](${result.videos[2].url}) adicionada na fila!`)
                                            .setColor("YELLOW")
                                        message.channel.send(embed1)
                                        msg.delete()
                                    })

                                    four.on('collect', (r, u) => {
                                        const song = result.videos[3];
                                        if (queue) {
                                            queue.songs.push(song);
                                            client.queues.set(message.guild.id, queue);
                                        } else playSong(client, message, song);
                                        const embed1 = new Discord.MessageEmbed()
                                            .setDescription(`[${result.videos[3].title}](${result.videos[3].url}) adicionada na fila!`)
                                            .setColor("YELLOW")
                                        message.channel.send(embed1)
                                        msg.delete()
                                    })

                                    five.on('collect', (r, u) => {
                                        const song = result.videos[4];
                                        if (queue) {
                                            queue.songs.push(song);
                                            client.queues.set(message.guild.id, queue);
                                        } else playSong(client, message, song);
                                        const embed1 = new Discord.MessageEmbed()
                                            .setDescription(`[${result.videos[4].title}](${result.videos[4].url}) adicionada na fila!`)
                                            .setColor("YELLOW")
                                        message.channel.send(embed1)
                                        msg.delete()
                                    })

                                    cancel.on('collect', (r, u) => {
                                        msg.delete()
                                    })
                                })
                            })
                        })
                    })
                })
                const queue = client.queues.get(message.guild.id);
            } else {
                return message.reply("desculpe, não encontrei o que você desejava!");
            }
        });
    } catch (e) {
        console.error(e);
    }

    const playSong = async (client, message, song) => {
        let queue = client.queues.get(message.member.guild.id);
        if (!song) {
            if (queue) {
                queue.connection.disconnect();
                return client.queues.delete(message.member.guild.id);
            }
        }
        if (!message.member.voice.channel) {
            return message.reply(
                "você precisa estar em um canal de voz para reproduzir uma música!"
            );
        }

        if (!queue) {
            const conn = await message.member.voice.channel.join();
            queue = {
                volume: 10,
                connection: conn,
                dispatcher: null,
                songs: [song],
            };
        }
        queue.dispatcher = await queue.connection.play(
            await ytdl(song.url, { bitrate: 192000, quality: 'highestaudio', highWaterMark: 1 << 25, filter: "audioonly" }),
            {
                type: "opus",
            }
        );
        var embed = new Discord.MessageEmbed()
            .setDescription(`Tocando [${queue.songs[0].title}](${queue.songs[0].url})`)
            .addField('Pedido:', `<@${nameUser}>`, true)
            .addField('Duração:', `${song.duration}`, true)
            .setColor("YELLOW")
        message.channel.send(embed).then(msg => {
            msg.delete({ timeout: (queue.songs[0].seconds) * 1000, reason: 'Feito!' })
        });
        queue.dispatcher.on("finish", () => {
            queue.songs.shift();
            playSong(client, message, queue.songs[0]);
        });
        client.queues.set(message.member.guild.id, queue);
    };
};