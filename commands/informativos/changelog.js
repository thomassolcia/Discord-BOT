exports.run = (client, message, args) => {

    const Discord = require('discord.js')
    let pages = ['Acompanhe minhas atualizações']
    let content = [`[Changelogs](https://sites.google.com/view/awoone)`]
    let page = 1

    const embed = new Discord.MessageEmbed() // Define a new embed
        .setColor(0xffffff) // Set the color
        .setFooter(`Página ${page} de ${pages.length}`)
        .setTitle(pages[page - 1])
        .setDescription(content[page - 1])

    message.channel.send({ embed }).then(msg => {
        msg.react('⬅').then(r => {
            msg.react('➡').then(s => {
                msg.react('❌')
            });

            // Filters
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id
            const cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id

            const backwards = msg.createReactionCollector(backwardsFilter, { timer: 6000 })
            const forwards = msg.createReactionCollector(forwardsFilter, { timer: 6000 })
            const cancel = msg.createReactionCollector(cancelFilter, { timer: 6000 })

            backwards.on('collect', (r, u) => {
                if (page === 1) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                page--
                embed.setTitle(pages[page - 1])
                embed.setDescription(content[page - 1])
                embed.setFooter(`Página ${page} de ${pages.length}`)
                msg.edit(embed)
                r.users.remove(r.users.cache.filter(u => u === message.author).first())
            })

            forwards.on('collect', (r, u) => {
                if (page === pages.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                page++
                embed.setTitle(pages[page - 1])
                embed.setDescription(content[page - 1])
                embed.setFooter(`Página ${page} de ${pages.length}`)
                msg.edit(embed)
                r.users.remove(r.users.cache.filter(u => u === message.author).first())
            })

            cancel.on('collect', (r, u) => {
                msg.delete()
            })
        })
    })
}