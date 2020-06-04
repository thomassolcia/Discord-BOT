const fetch = require("node-fetch");
const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if(!args[0]){
    message.channel.send('Você precisa inserir um país. Exemplo: \`=covid brazil\` ou \`=covid br\`')
  }

    let countries = args[0] 
    fetch(`https://corona.lmao.ninja/v2/countries/${countries}`)
    .then(res => res.json())
    .then(data => {
      let country = data.country;
      let flag = data.countryInfo.flag;
      let confirmed = data.cases.toLocaleString();
      let todayconfirmed = data.todayCases.toLocaleString();
      let deaths = data.deaths.toLocaleString();
      let todaydeaths = data.todayDeaths.toLocaleString();
      let recovered = data.recovered.toLocaleString();
      let critical = data.critical.toLocaleString();
      let active = data.active.toLocaleString();
      let deathperm = data.deathsPerOneMillion.toLocaleString();
      let casesperm = data.casesPerOneMillion.toLocaleString();
      
      const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTimestamp(new Date())
      .setAuthor("ESTATÍSTICAS DO COVID-19", flag)
      .addField(`Dados: ${country}`, `Confirmados: (Total: **${confirmed}** | Hoje: **${todayconfirmed}**) \nMortes: (Total: **${deaths}** | Hoje: **${todaydeaths}**) \nRecuperados: **${recovered}** \nEm risco: **${critical}** \nAtivos: **${active}**\n\nCasos/1M: **${casesperm}**\nMortes/1M: **${deathperm}**`)
      message.channel.send(embed);
    })
}
