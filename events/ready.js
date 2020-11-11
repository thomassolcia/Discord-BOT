module.exports = async (client, message) => {
    console.log('\n     [COMANDOS PREPARADOS]      \n')
    setInterval(() => {
        var quotes = ['=ajuda']
        client.user.setActivity(
            quotes[Math.floor(quotes.length * Math.random())], { type: 'PLAYING' }
        );
    }, 60000);
}