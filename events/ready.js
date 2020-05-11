module.exports = async client => {
    console.log('\n     [STATUS]')
    console.log('\nBOT PRONTO PARA USO!');
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
    memberCountChannel.setName('👥 | Usuários: ' + memberCount);
    console.log('Usúarios no servidor: ' + memberCount);
    setInterval(function () {
        let pingAPIChannel = myGuild.channels.cache.get('705183603650199572');
        let test = myGuild.channels.cache.get('705140258647572510');
        pingAPIChannel.setName(`📶 | Ping API: ${Math.floor(client.ws.ping)}ms`);

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        if (days < 1){
            test.setName(`🕒 | Uptime: ${hours}h:${minutes}m`);
        }else if (days >= 1)
            test.setName(`🕒 | Uptime: ${days} dias`);

    }, 60000)
    client.user.setActivity("=comandos", { type: "PLAYING" });
}