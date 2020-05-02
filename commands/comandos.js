exports.run = async (client, message) => {
	const embed = {
        "title": "Lista de Comandos: " + message.guild.name,
        "color": 15359,
        "fields": [
		  {
			"name": "[EVERYONE]",
			"value": '-'
		  },
          {
            "name": "=ping",
            "value": 'Mostra o tempo de resposta do bot'
          },
          {
            "name": "=sorte",
            "value": 'Faça-o e veja sua sorte!'
          },
          {
            "name": "=r [valorDado]",
            "value": 'd2, d4, d6, d8, d10, d20 ou d100. Você escolhe!'
          },
          {
            "name": "=nick [novoApelido]",
            "value": 'Altere seu apelido no servidor.'
          },
          {
            "name": "=uptime",
            "value": 'Tempo que o bot está ativo.'
          },
          {
            "name": "=user:",
			"value": 'Veja informações sobre você.'
		  },
		  {
            "name": "=server:",
            "value":'Veja informações sobre o servidor.'
		  },
		  {
            "name": "[OWNERS/PARTNERS]:",
            "value":'-'
		  },
		  {
            "name": "=kick [@]",
            "value":'Expulsa alguém do servidor!'
		  },
		  {
            "name": "=limpar [2-100]",
            "value":'Limpa mensagens de até 2 semanas.'
		  }
        ]
      };
      message.channel.send({ embed });
}