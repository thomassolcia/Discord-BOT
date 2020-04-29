module.exports = async client => {
	console.log('logado');
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let statuses = [
        "=comandos para obter dicas!",
        memberCount + " maconheiros na reabilitação"
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"});
    }, 5000)
}