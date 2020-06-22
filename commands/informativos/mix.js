const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    function shuffleArray(array) {

        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i);
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function splitTeams(names) {
        return `Time 1: \n\`${names.splice(0, Math.floor(names.length/2))}\`\n\nTime 2: \n\`${names}\``
    }
    mix = [args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]]
    var teams = splitTeams(shuffleArray(mix))

    //message.channel.send(teams)

    function shuffleArrayMaps(array) {
    
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i);
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function splitMaps(names) {
        return `\n\`${names.splice(0, Math.floor(names.length/7))}\``
    }
    mix = ['Mirage', 'Cobblestone', 'Inferno', 'Vertigo', 'Nuke', 'Overpass', 'Dust II']
    var maps = splitMaps(shuffleArrayMaps(mix))

    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTimestamp(new Date())
      .setTitle('Vila mix')
      .addField('------- Times -------',teams)
      .addField('------- Mapa -------',maps)
      .setTimestamp()
      .setFooter(message.author.tag);
      let msg = await message.channel.send({embed});

	await msg.react('👍');
	await msg.react('👎');

}