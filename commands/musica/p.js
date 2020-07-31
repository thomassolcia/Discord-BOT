const { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");

exports.run = async (client, message, args) => {
  try {
    const { channel } = message.member.voice;
    if (!channel)
      return message.channel.send(
        'Você precisa estar em um canal de música primeiro!'
      );
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.channel.send(
        'Eu não posso entrar nesse canal ai. Da uma olhada se tenho permissão!'
      );
    if (!permissions.has("SPEAK"))
      return message.channel.send(
        'Eu não posso falar nesse canal ai. Da uma olhada se tenho permissão!'
      );
    const youtube = new YouTube(client.config.key);
    var searchString = args.join(" ");
    if (!searchString)
      return message.channel.send("Você precisa pesquisar por alguma música.");
    const serverQueue = message.client.queue.get(message.guild.id);
    var videos = await youtube.searchVideos(searchString).catch(console.log);
    var songInfo = await videos[0].fetch().catch(console.log);

    const song = {
      id: songInfo.id,
      title: Util.escapeMarkdown(songInfo.title),
      url: songInfo.url,
    };

    if (serverQueue) {
      serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      const embed = {
        "title": 'Adicionado à fila',
        "description": `[${songInfo.title}](${songInfo.url}) [by: <@${message.author.id}>]`,
        "color": "YELLOW",
      };
      return message.channel.send({ embed });
    }

    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: channel,
      connection: null,
      songs: [],
      volume: 2,
      playing: true,
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    const play = async (song) => {
      const queue = message.client.queue.get(message.guild.id);
      if (!song) {
        queue.voiceChannel.leave();
        message.client.queue.delete(message.guild.id);
        return;
      }

      const dispatcher = queue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          queue.songs.shift();
          play(queue.songs[0]);
        })
        .on("error", (error) => console.error(error));
      dispatcher.setVolumeLogarithmic(queue.volume / 5);
      const embed = {
        "description": `Tocando [${queue.songs[0].title}](${queue.songs[0].url}) [by: <@${message.author.id}>]`,
        "color": "YELLOW",
      };
      queue.textChannel.send({ embed });
    };

    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      play(queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Eu não posso entrar no canal de voz: ${error}`);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.channel.send(
        `Eu não posso entrar no canal de voz: ${error}`
      );
    }
  } catch{
    message.channel.send('API-1 com erro. Trocando para API-2')
    const { channel } = message.member.voice;
    if (!channel)
      return message.channel.send(
        'Você precisa estar em um canal de música primeiro!'
      );
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.channel.send(
        'Eu não posso entrar nesse canal ai. Da uma olhada se tenho permissão!'
      );
    if (!permissions.has("SPEAK"))
      return message.channel.send(
        'Eu não posso falar nesse canal ai. Da uma olhada se tenho permissão!'
      );
    const youtube = new YouTube(client.config.api2);
    var searchString = args.join(" ");
    if (!searchString)
      return message.channel.send("Você precisa pesquisar por alguma música.");
    const serverQueue = message.client.queue.get(message.guild.id);
    var videos = await youtube.searchVideos(searchString).catch(console.log);
    var songInfo = await videos[0].fetch().catch(console.log);

    const song = {
      id: songInfo.video_id,
      title: Util.escapeMarkdown(songInfo.title),
      url: songInfo.url,
    };

    if (serverQueue) {
      serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      const embed = {
        "title": 'Adicionado à fila',
        "description": `[${songInfo.title}](${songInfo.url})`,
        "color": "YELLOW",
      };
      return message.channel.send({ embed });
    }

    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: channel,
      connection: null,
      songs: [],
      volume: 2,
      playing: true,
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    const play = async (song) => {
      const queue = message.client.queue.get(message.guild.id);
      if (!song) {
        queue.voiceChannel.leave();
        message.client.queue.delete(message.guild.id);
        return;
      }

      const dispatcher = queue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          queue.songs.shift();
          play(queue.songs[0]);
        })
        .on("error", (error) => console.error(error));
      dispatcher.setVolumeLogarithmic(queue.volume / 5);
      const embed = {
        "title": 'Tocando',
        "description": `[${queue.songs[0].title}](${queue.songs[0].url})`,
        "color": "YELLOW",
      };
      queue.textChannel.send({ embed });
    };

    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      play(queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Eu não posso entrar no canal de voz: ${error}`);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.channel.send(
        `Eu não posso entrar no canal de voz: ${error}`
      );
    }
  }
}