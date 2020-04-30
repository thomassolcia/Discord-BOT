exports.run = async (client, message) => {
  const Discord = require("discord.js");

  const embed = {
	"title": "Comandos: ~~(use com moderação ok?)~~",
	"color": 5573644,
	"author": {
	  "name": "Leão do Proerd",
	  "url": "https://discordapp.com",
	  "icon_url": "https://cdn.discordapp.com/avatars/704392967074349087/2a2ae76986efdcdf549d9bd0dcedeafc.png"
	},
	"fields": [
	  {
		"name": "**[EVERYONE]**",
		"value": "-"
	  },
	  {
		"name": "**=ping**",
		"value": "*Mostra o tempo de resposta do bot*"
	  },
	  {
		"name": "**=sorte**",
		"value": "*Faça-o e veja sua sorte!*"
	  },
	  {
		"name": "**=r [tipoDado]**",
		"value": "*d2, d4, d6, d8, d10, d20 ou d100. Você escolhe!*"
	  },
	  {
		"name": "**=nick [novoApelido]**",
		"value": "*Altere seu apelido no servidor.*"
	  },
	  {
		"name": "**=uptime**",
		"value": "*Tempo que o bot está ativo.*"
	  },
	  {
		"name": "**[OWNERS / PARTNERS]**",
		"value": "-"
	  },
	  {
		"name": "**=limpar [numeroLinhas]**",
		"value": "*Limpa mensagens de até 2 semanas, quantas linhas desejar!*"
	  },
	  {
		"name": "**=kick [nomeUsuário]**",
		"value": "*Expulsa alguém do servidor!*"
	  }
	]
  };
  message.channel.send("Aqui está a lista de comandos 😃", { embed });
}