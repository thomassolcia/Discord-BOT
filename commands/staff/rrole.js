const Discord = require('discord.js');
exports.run = (client, message, args) => {

    if (message.mentions.users.size === 0) {
        return message.reply("Por favor, mencione um usuário!");
    }

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Você não tem permissão para usar este comando`);
    
if(!args[1]) return message.channel.send(`Você precisa inserir um cargo para ser removido.`);

let cargo = args[1]
let motivo = args[2]

let role = message.guild.roles.cache.find(r => r.name === cargo);
let member = message.mentions.members.first();

const embed = new Discord.MessageEmbed()
                            .setDescription(`**Cargo removido**`)
                            .setColor("RED")
                            .addField("Usuário", `${member}`, true)
                            .addField("Staff", message.author.username, true)
                            .setThumbnail(member.displayAvatarURL)
                            .addField("Obs.", `${motivo}`, true)
                            .setFooter(`${message.author.tag}`)
                            .setTimestamp()

                            message.channel.send(embed);

member.roles.remove(role).catch(console.error);
}