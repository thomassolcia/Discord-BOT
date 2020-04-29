module.exports = async (client, member) => {
	let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
    memberCountChannel.setName('Usuários: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
	const embed = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": client.user.avatarURL,
		"text": "Data de entrada"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "Bem vindo(a) ao Proerd!",
		  "value": "Leia as <#450391023403794472>, fique atento à elas"
		}
	  ]
	};
	member.guild.channels.get("694285200582115418").send({embed});
}