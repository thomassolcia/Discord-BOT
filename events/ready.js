module.exports = async client => {
    console.log('\n     [STATUS]')
    console.log('\nBOT PRONTO PARA USO!');
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
    memberCountChannel.setName('👥│Usuários: ' + memberCount);
    console.log('Usúarios no servidor: ' + memberCount);

    client.user.setActivity("=ajuda", { type: "PLAYING" })
}