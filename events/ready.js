module.exports = async client => {
    console.log('\n     [STATUS]')
    console.log('\nBOT PRONTO PARA USO!');
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    console.log('Usúarios no servidor: ' + memberCount);

    setInterval(function () {
        let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
        memberCountChannel.setName('👥 | Usuários: ' + memberCount);
        let pingAPIChannel = myGuild.channels.cache.get('705183603650199572');
        let test = myGuild.channels.cache.get('705140258647572510');
        let upbot = (client.uptime);
        upbotfix = (upbot / ((3, 6) ** 8.426));
        pingAPIChannel.setName(`📶 | Ping API: ${Math.floor(client.ws.ping)}ms`);
        if(parseFloat(upbotfix).toFixed(2) <= 24) {
            test.setName('🕒 | Uptime: ' + parseFloat(upbotfix).toFixed(2) + 'h');
        } else if ((parseFloat(upbotfix).toFixed(2) / 24) >= 0.9 && (parseFloat(upbotfix).toFixed(2) / 24) < 1.9) {
            test.setName('🕒 | Uptime: ' + parseInt(upbotfix).toFixed(2) / 24 + ' dia');
        } else if ((parseFloat(upbotfix).toFixed(2) / 24) >= 1.9) {
            test.setName('🕒 | Uptime: ' + parseInt(upbotfix).toFixed(2) / 24 + ' dias');
        }
    }, 5000)

    let myGuild1 = client.guilds.cache.get('364926866487902208');
    let memberCount1 = myGuild1.memberCount;
    let statuses = [
        "=comandos para obter dicas!",
        memberCount1 + " maconheiros na reabilitação"
    ]
    setInterval(function () {
        memberCount = myGuild.memberCount;
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "PLAYING" });
    }, 5000)

    
}