const client = global.client;

client.on("ready", () => {
    console.log("Bot pronto para uso!");
    setInterval(() => {
        var quotes = ['=ajuda']
        client.user.setActivity(
            quotes[Math.floor(quotes.length * Math.random())], { type: 'PLAYING' }
        );
    }, 60000);
});

client.login(global.Settings.Token);