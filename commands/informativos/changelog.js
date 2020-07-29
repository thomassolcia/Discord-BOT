exports.run = (client, message, args) => {

    const Discord = require('discord.js')
let pages = ['[v2.4] - 2020-07-28','[v2.3.9] - 2020-07-22', '[v2.3.8] - 2020-07-17', '[v2.3.7] - 2020-06-22', '[Atualizações mais antigas]']
let content = [`**[Adicionado]**
- Comando \`=changelog\` para mostras as atualizações mais recentes.
- Comando \`=bug\` para reportar alguma problema direto à mim.

**[Corrigido]**
- \`message.js\` teve um erro crítico corrido. Qualquer comando enviado na DM do bot fazia com quem ele parasse de funcionar. Isso não ocorre mais.
- Outros problemas menores também foram resolvidos no \`message.js\`

**[Removido]**
- Comandos de música foram removidos por tempo indeterminado.
`, `**[Adicionado]**
- Adicionado o comando \`=catfacts\` para descobrir algum fato aleatório sobre os gatos.
- Adicionado o comando \`=forca\` para iniciar um minigame.

**[Consertado]**
- Comando \`=listban\` foi corrigido para mostrar corretamente a lista dos usuários e seus ID's.
- Comando \`=promo\` foi corrigido. Não é mais possível envia-lo com campos em branco.

**[Modificado]**
- As API's do comando \`=covid\` foram atualizadas \`v2->v3\` com algumas novas funcionalidades.
- Comando \`=p\` e \`=play\` tiveram a incrementação de uma segunda API caso a primeira esteja com problemas.
- Comandos de música otimizados.
- Comando \`=steamstats\` teve as buscas melhoradas.

**[Removido]**
- \`guildMemberAdd.js\` foi removido.
- \`guildMemberRemove.js\` foi removido.
- Pacotes não utilizados foram removido do \`package.json\`.`, `**[Adicionado]**
- Tratamento de erro adicionado para alguns comandos. Caso ocorra, você saberá o que está acontecendo.

**[Consertado]**
- API do youtube corrigida. Comandos de música devem funcionar normalmente agora.

**[Modificado]**
- Comando \`=dolar\` otimizado.
- Comando \`=steamstats\` otimizado.
- Comando \`=ping\` otimizado.

**[Removido]**
- \`Ready.js\` teve o Fetch removido.`, `**[Adicionado][BETA]**
- Comando \`=steamstats\` foi adicionado. Veja informações sobre sua conta steam.
- Comando \`=dolar\` foi adicionado. Veja quanto vale o dólar hoje.

**[Modificado]**
- Comando \`=steam\` reestruturado e corrigido.
- Comando \`=ajuda\` atualizado com todos os comandos atuais.`, `https://sites.google.com/view/awoone`]
let page = 1 

const embed = new Discord.MessageEmbed() // Define a new embed
.setColor(0xffffff) // Set the color
.setFooter(`Página ${page} de ${pages.length}`)
.setTitle(pages[page-1])
.setDescription(content[page-1])

message.channel.send({embed}).then(msg => {
  msg.react('⬅').then( r => {
    msg.react('➡').then(s => {
        msg.react('❌')
    }).then(message.delete({ timeout: 5000, reason: 'Feito!' }))

    // Filters
    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id
    const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id
    const cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id

    const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000})
    const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000})
    const cancel = msg.createReactionCollector(cancelFilter, {timer: 6000})

    backwards.on('collect', (r, u) => {
        if (page === 1) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
        page--
        embed.setTitle(pages[page-1])
        embed.setDescription(content[page-1])
        embed.setFooter(`Página ${page} de ${pages.length}`)
        msg.edit(embed)
        r.users.remove(r.users.cache.filter(u => u === message.author).first())
    })

    forwards.on('collect', (r, u) => {
        if (page === pages.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
        page++
        embed.setTitle(pages[page-1])
        embed.setDescription(content[page-1])
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