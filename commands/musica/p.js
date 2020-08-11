const search = require("yt-search");
const ytdl = require("ytdl-core-discord");
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (message.content.includes('playlist') || message.content.includes('list') || message.content.includes('index')) {
    return message.reply('Playlists não estão disponíveis para reprodução no momento.')
  }
  const nameUser = message.author.id;
  const s = args.join(" ");
  try {
    search(s, (err, result) => {
      if (err) {
        throw err;
      } else if (result && result.videos.length > 0) {
        const song = result.videos[0];
        const queue = client.queues.get(message.guild.id);
        if (queue) {
          queue.songs.push(song);
          client.queues.set(message.guild.id, queue);
        } else playSong(client, message, song);
        init = 0;
        try {
          if (!queue) {
            const embed1 = new Discord.MessageEmbed()
              .setDescription(`Começando a tocar **[${result.videos[0].title}](${result.videos[0].url})**`)
              .setColor("YELLOW")
            message.channel.send(embed1).then(msgd => {
              msgd.delete({ timeout: (song.seconds) * 1000, reason: 'Feito!' })
            })
          } else {
            init = 0;
            var tEstimado = 0;
            for (var i = 0; i < queue.songs.length-1; i++) {
              tEstimado += queue.songs[i].seconds;
            }
            var duracao = `${result.videos[0].duration}`;
            var pTocada = `${queue.songs.length - 1}`;
            var pFila = `${queue.songs.length}`;
            const embed1 = new Discord.MessageEmbed()
              .setDescription(`**Adicionada na fila**`)
              .setThumbnail(`${result.videos[0].thumbnail}`)
              .addField('Música', `**[${result.videos[0].title}](${result.videos[0].url})**`)
              .addFields(
                { name: 'Tempo até ser tocada', value: `≅ ${parseInt(tEstimado / 60)} minutos`, inline: true },
                { name: 'Duração', value: duracao, inline: true },
                { name: '\u200B', value: '\u200B', inline: true },
              )
              .addFields(
                { name: 'Músicas na frente', value: pTocada, inline: true },
                { name: 'Posição atual na fila', value: pFila, inline: true },
                { name: '\u200B', value: '\u200B', inline: true },
              )
              .setColor("YELLOW")
            message.channel.send(embed1)
          }
        } catch (err) {
          console.log(err)
        }
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
      const conn = await message.member.voice.channel.join()
      queue = {
        volume: 10,
        connection: conn,
        dispatcher: null,
        songs: [song],
      };
    } else {
      var embed = new Discord.MessageEmbed()
        .setDescription(`Começando a tocar **[${queue.songs[0].title}](${queue.songs[0].url})**`)
        .setColor("YELLOW")
      message.channel.send(embed).then(msg => {
        msg.delete({ timeout: (queue.songs[0].seconds) * 1000, reason: 'Feito!' })
      })
    }
    queue.dispatcher = await queue.connection.play(
      await ytdl(song.url, { bitrate: 96000, quality: 'highestaudio', highWaterMark: 1 << 30, filter: "audioonly" }),
      {
        type: "opus",
      }
    )
    queue.dispatcher.on("finish", () => {
      queue.songs.shift();
      playSong(client, message, queue.songs[0]);
    });
    client.queues.set(message.member.guild.id, queue);
  };
};