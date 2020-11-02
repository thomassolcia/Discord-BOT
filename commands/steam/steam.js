const Discord = require("discord.js");
const csgoStats = require('csgostatsnode');
var moment = require('moment');
const csStats = new csgoStats({ "apikey": "5BD2A4F2E5AE839474CC7B0EB1EC9BA4" });
exports.run = (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Exemplo do uso correto: \`=id awoone\`\nhttps://prnt.sc/vaksom`)
    } else {
        csStats.getMyBans(`${args[0]}`, function (data2) {
            vacBan = data2.VACBanned;
            communityBan = data2.CommunityBanned;
            tradeBan = data2.EconomyBan;
            csStats.getProfile(`${args[0]}`, async function (data) {
                var createdAt = moment.unix(data.timecreated).format("DD-MM-YYYY | h:mm:ss");
                var logoffAt = moment.unix(data.lastlogoff).format("DD-MM-YYYY | h:mm:ss");

                if (vacBan == false) {
                    vacBan = 'não'
                } else {
                    vacBan = 'sim'
                }
                if (communityBan == false) {
                    communityBan = 'não'
                } else {
                    communityBan = 'sim'
                }
                if (tradeBan == 'none') {
                    tradeBan = 'não'
                } else {
                    tradeBan = 'sim'
                }

                const Discord = require('discord.js');
                const cheerio = require('cheerio')
                const axios = require('axios')
                const fetchData = async (url) => {
                    const result = await axios.get(url)
                    return result.data
                }
                const content = await fetchData(`https://steamid.uk/profile/${data.steamid}`)
                const $ = cheerio.load(content)
                const content2 = await fetchData(`https://steamcommunity.com/profiles/${data.steamid}`)
                const $2 = cheerio.load(content2)
                $2("span.profile_count_link_total").eq(0).each((ii, f) => {
                    $2("span.profile_count_link_total").eq(1).each((ii, f2) => {
                        $("span.label.label-success.pull-right").eq(0).each((i, f3) => {
                            $("span[title='steam id']").each((i, e) => {
                                $("span[title='steam3']").each((i, e1) => {
                                    $("div[style='margin:10px;']").each((i, e2) => {
                                        level = $(f3).text()
                                        badges = $2(f).text().replace(/\s/g, '')
                                        jogos = $2(f2).text().replace(/\s/g, '')
                                        steamid = $(e).eq(0).text()
                                        steamid3 = $(e1).eq(0).text()
                                        amigos = $(e2).eq(0).text().split(' ')[0]

                                        const embed = new Discord.MessageEmbed()
                                            .setTitle(`Informações da sua Steam - ${level}`)
                                            .setThumbnail(`${data.avatarfull}`)
                                            .setDescription(`**[CONTA]**\n**Nome:** ${data.personaname}\n**Amigos:** ${amigos}\n**Badges:** ${badges}\n**Jogos:** ${jogos}\n**Último login:** ${logoffAt}\n**Criada em:** ${createdAt}\n\n**[BANIMENTOS]**\n**VAC ban:** ${vacBan}\n**Community ban:** ${communityBan}\n**Trade ban:** ${tradeBan}\n\n**[ID's e URL]**\n**Comunity ID:** ${data.steamid}\n**Steam ID:** ${steamid}\n**Steam3 ID:** ${steamid3}\nhttps://steamcommunity.com/profiles/${data.steamid}`)
                                            .setColor("BLACK")
                                            .setFooter(`Caso alguma informação esteja vazia seu perfil pode ter algo privado`)
                                        message.channel.send(embed);
                                    })
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}