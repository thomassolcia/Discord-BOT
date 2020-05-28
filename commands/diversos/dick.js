exports.run = (client, message, args) => {
        
        let dicksize = ["8=D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D", "404 not found"];
        let dickuser = message.mentions.users.first();

        if (!dickuser) {
            return message.channel.send('Você deve mencionar alguém!\n(Isso tem 100% de precisão!)');
        }
        if (dickuser.id == "363422400488144896") {
            return message.channel.send(`**O do ${dickuser} tem esse tamanho: ** 8=============================D\nMedido por: **${message.author.tag}**`);
        }

        message.channel.send(`**O do ${dickuser} tem esse tamanho: ** ${dicksize[~~Math.floor(Math.random() * dicksize.length)]}\nMedido por **${message.author.tag}**`);
}