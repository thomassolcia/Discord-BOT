const Discord = require('discord.js');
module.exports = async(client, message) => {
    console.log('\n     [COMANDOS PREPARADOS]      \n')
    setInterval(() => {
        var quotes = ['=ajuda', '🎃 Spookytober 🎃', '👻👻']
        client.user.setActivity(
            quotes[Math.floor(quotes.length * Math.random())], { type: 'PLAYING' }
        );
    }, 10000);
}