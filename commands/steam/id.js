const Discord = require("discord.js");
const csgoStats = require('csgostatsnode');
const csStats = new csgoStats({ "apikey": "5BD2A4F2E5AE839474CC7B0EB1EC9BA4" });
exports.run = (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Exemplo do uso correto: \`=id awoone\`\nhttps://prnt.sc/vaksom`)
    } else {
        csStats.getMySteamID(`${args[0]}`, function (data) {
            const embed = new Discord.MessageEmbed()
                .setDescription(`O seu ID da steam é: \`${data}\``)
                .setColor("BLACK")
            message.channel.send(embed);
        });
    }
}