const request = require('request');
const {
    JSDOM
} = require('jsdom');
const {
    stripIndents
} = require('common-tags');
let serversmap = new Map(); // List all the servers that the game is running

exports.run = async (client, message, args) => {
    if (serversmap.has(message.guild.id)) {
        return message.channel.send(new Discord.RichEmbed()
            .setTitle('Erro')
            .setDescription('Já existe uma instância do jogo rodando neste servidor.')
            .setColor("RANDOM"));
    }
    try {

        request('https://www.palabrasaleatorias.com/palavras-aleatorias.php', async(err, res) => {
            if (err) return console.log(err);
            const dom = new JSDOM(res.body);
            const pageWord = dom.window.document.querySelector("table div").innerHTML;
            var rSpace = pageWord.toLowerCase().replace(/\s+/g,"");
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
                await message.channel.send(stripIndents `
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
                    return res.author.id === message.author.id && !confirmation.includes(choice) && !incorrect.includes(choice);
                };
                const guess = await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000
                });
                if (!guess.size) {
                    await message.reply('tempo esgotado, você perdeu!');
                    break;
                }
                const choice = guess.first().content.toLowerCase();
                if (choice === 'sair') break;
                if (choice.length > 1 && (choice === word || choice === word.toLowerCase())) {
                    guessed = true;
                    break;
                } else if (word.includes(choice)) {
                    displayText = true;
                    for (let i = 0; i < word.length; i++) {
                        if (word[i] !== choice) continue; // eslint-disable-line max-depth
                        confirmation.push(word[i]);
                        display[i] = word[i];
                    }
                } else {
                    displayText = false;
                    if (choice.length === 1) incorrect.push(choice);
                    points++;
                }
            }
            if (word.length === confirmation.length || guessed){
                message.reply(`boa! A palavra era \`${word}\`.`);
            }else{
                message.reply(`que pena! A palavra era \`${word}\`.`);
            }
    });
    } catch (err) {
        const embedE = new Discord.MessageEmbed() 
        .setTitle(`Algo deu errado!.`)
        .setDescription("Contate alguém da Staff para ajudar você.")
        .addField('Erro:',`\`${err}\``)
        .setColor("ORANGE")
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(embedE)
    }
}