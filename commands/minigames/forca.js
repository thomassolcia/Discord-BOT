const request = require('request');
const {
    JSDOM
} = require('jsdom');
const {
    stripIndents
} = require('common-tags');
let serversmap = new Map();

exports.run = async (client, message, args) => {
    var ptsAuthor = 0;
    var ptsGuest = 0;
    if (serversmap.has(message.guild.id)) {
        return message.channel.send(new Discord.RichEmbed()
            .setTitle('Erro')
            .setDescription('Já existe uma instância do jogo rodando neste servidor.')
            .setColor("RANDOM"));
    }
    try {

        request('https://www.palabrasaleatorias.com/palavras-aleatorias.php', async (err, res) => {
            if (err) return console.log(err);
            const dom = new JSDOM(res.body);
            const pageWord = dom.window.document.querySelector("table div").innerHTML;
            var rSpace = pageWord.toLowerCase().replace(/\s+/g, "");
            const word = rSpace.replace(/ /g, '-');
            console.log(word)
            let points = 0;
            let displayText = null;
            let guessed = false;
            const confirmation = [];
            const incorrect = [];
            const display = new Array(word.length).fill('_');
            console.log(display)
            while (word.length !== confirmation.length && points < 6) {
                await message.channel.send(stripIndents`
                        ${displayText === null ? 'Vamos lá!' : displayText ? 'Bom trabalho!' : 'Nope!'}
                        \`${display.join(' ')}\`. Qual letra você escolhe?
                        Tentativas incorretas: ${incorrect.join(', ') || 'Nenhuma'}
                        \`\`\`
                        ___________
                        |     |
                        |     ${points > 0 ? 'O' : ''}
                        |    ${points > 2 ? '—' : ' '}${points > 1 ? '|' : ''}${points > 3 ? '—' : ''}
                        |    ${points > 4 ? '/' : ''} ${points > 5 ? '\\' : ''}
                        |
                        ============
                        \`\`\`
                    `);
                const filter = res => {
                    const choice = res.content.toLowerCase();
                    if (res.author.id === message.author.id && word.includes(choice)) {
                        ptsAuthor++;
                        message.channel.send(`O usuário ${message.author.username} marcou 1 ponto!\nTotal: ${ptsAuthor}`)
                    } else if (res.author.id === message.author.id && !word.includes(choice)) {
                        ptsAuthor--;
                        message.channel.send(`O usuário ${message.author.username} perdeu 1 ponto!\nTotal: ${ptsAuthor}`)
                    } else if (res.author.id !== message.author.id && word.includes(choice)) {
                        ptsGuest++;
                        message.channel.send(`O usuário ${res.author.username} marcou 1 ponto!\nTotal: ${ptsGuest}`)
                    } else if (res.author.id !== message.author.id && !word.includes(choice)) {
                        ptsGuest--;
                        message.channel.send(`O usuário ${res.author.username} perdeu 1 ponto!\nTotal: ${ptsGuest}`)
                    }
                    return !confirmation.includes(choice) && !incorrect.includes(choice);
                };
                const guess = await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 120000
                });
                if (!guess.size) {
                    await message.channel.send('Tempo esgotado, ninguém ganha quando o tempo acaba!');
                    break;
                }
                const choice = guess.first().content.toLowerCase();
                if (choice === 'stop') break;
                if (choice.length > 1 && (choice === word || choice === word.toLowerCase())) {
                    guessed = true;
                    break;
                } else if (word.includes(choice)) {
                    displayText = true;
                    for (let i = 0; i < word.length; i++) {
                        if (word[i] !== choice) continue;
                        confirmation.push(word[i]);
                        display[i] = word[i];
                    }
                } else {
                    displayText = false;
                    if (choice.length === 1) incorrect.push(choice);
                    points++;
                }
            }
            if (word.length === confirmation.length || guessed) {
                if (ptsGuest > ptsAuthor) {
                    message.channel.send(`O usuário <@${res.author.id}> fez um total de ${ptsGuest} e venceu a rodada!`);
                } else if (ptsGuest < ptsAuthor) {
                    message.channel.send(`O usuário <@${message.author.id}> fez um total de ${ptsAuthor} e venceu a rodada!`);
                } else {
                    message.channel.send(`A palavra era \`${word}\` e ambos jogadores fizeram a mesma pontuação!`);
                }
            } else {
                if (ptsGuest > ptsAuthor) {
                    message.channel.send(`A forca está completa!\nO usuário <@${res.author.id}> fez um total de ${ptsGuest} e venceu a rodada!`);
                } else if (ptsGuest < ptsAuthor) {
                    message.channel.send(`A forca está completa!\nO usuário <@${message.author.id}> fez um total de ${ptsAuthor} e venceu a rodada!`);
                } else {
                    message.channel.send(`A forca está completa!\nA palavra era \`${word}\` e ambos jogadores fizeram a mesma pontuação!`);
                }
            }
        });
    } catch (err) {
        const embedE = new Discord.MessageEmbed()
            .setTitle(`Algo deu errado!.`)
            .setDescription("Contate alguém da Staff para ajudar você.")
            .addField('Erro:', `\`${err}\``)
            .setColor("ORANGE")
            .setTimestamp()
            .setFooter(message.author.tag)
        message.channel.send(embedE)
    }
}