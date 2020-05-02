module.exports = async client => {
    console.log('\n     [STATUS]')
    console.log('\nBOT PRONTO PARA USO!');

    setInterval(function () {
        let myGuild = client.guilds.cache.get('364926866487902208');
        let memberCount = myGuild.memberCount;
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
        console.log('Usúarios no servidor: ' + memberCount);
    }, 60000)
    
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    memberCount = myGuild.memberCount;

    let statuses = [
        "=comandos",
        memberCount + " usuários em reabilitação"
    ]
    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "PLAYING" });
    }, 5000)

    
}