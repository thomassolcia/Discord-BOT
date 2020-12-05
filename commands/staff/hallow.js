const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    message.delete();
    const embed = new Discord.MessageEmbed()
        .setColor('ff7f1e')
        .setTitle('🎃 Spookytober 🎃')
        .setDescription(`Caros <@&720173388269879319> de nossa instituição. Junto da dose diária como parte do protocolo de Reinserção na sociedade, com a imensa alegria venho trazer a noticia que durante este mês de outubro estaremos entrando no modo Spookytober, deixando nossas instalações tematizadas com o Halloween.
        
        Portando, venho por meio deste anuncio, abrir uma votação de qual cor vocês desejam os seus uniformes(cargos) durante este mês. Votem abaixo:
        
        **<@&762802029742653470>**
        
        **<@&762802036810448917>**
        
        **<@&762802039754981438>**
        
        **<@&762802041709133855>**
        
        *A votação será finalizada em dois dias.*`)
    message.channel.send(embed).then(m => m.react('🧡').then(m.react('❤').then(m.react('🖤').then(m.react('💜')))))
}

exports.conf = {
    commands: ["hallow"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'hallow',
    description: 'Evento',
    usage: '[=]hallow',
    kategori: 'staff'
};