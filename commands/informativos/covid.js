const fetch = require("node-fetch");
const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if(!args[0]){
    fetch(`https://corona.lmao.ninja/v3/covid-19/all`)
    .then(res => res.json())
    .then(data => {
      let casos = data.cases.toLocaleString();
      let casosHoje = data. todayCases.toLocaleString();
      let mortes = data.deaths.toLocaleString();
      let mortesHoje = data.todayDeaths.toLocaleString();
      let recuperados = data.recovered.toLocaleString();
      let emRisco = data.critical.toLocaleString();
      let mortesM = data.deathsPerOneMillion.toLocaleString();
      let casosM = data.casesPerOneMillion.toLocaleString();
      let testes = data.tests.toLocaleString();
      let testesM = data.testsPerOneMillion.toLocaleString();
      let pop = data.population.toLocaleString();
      let paises = data.affectedCountries;
      let ativos = data.active.toLocaleString();

      const embed1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTimestamp(new Date())
      .setAuthor("🌎 ESTATÍSTICAS GLOBAIS DO COVID-19")
      .addField(`Dados: World`, `População Mundial: **${pop}**\nPaíses Afetados: **${paises}**\n\nConfirmados: (Total: **${casos}** | Hoje: **${casosHoje}**)\nMortes: (Total: **${mortes}** | Hoje: **${mortesHoje}**)\nRecuperados: **${recuperados}** \nEm risco: **${emRisco}** \nAtivos: **${ativos}**\n\nTestes: (Total: **${testes}** | per1M: **${testesM}**)\nCasos/1M: **${casosM}**\nMortes/1M: **${mortesM}**`)
      .setTimestamp()
      .setFooter(message.author.tag);
      message.channel.send(embed1);
    message.channel.send('Informações do Covid-19 em um páis específico: \`=covid brazil\` ou \`=covid br\`')
  })
  }else{
    let countries = args[0] 
    fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${countries}`)
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
      let tests = data.testsPerOneMillion.toLocaleString();
      let deathperm = data.deathsPerOneMillion.toLocaleString();
      let casesperm = data.casesPerOneMillion.toLocaleString();
      
      const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTimestamp(new Date())
      .setAuthor("ESTATÍSTICAS DO COVID-19", flag)
      .addField(`Dados: ${country}`, `Confirmados: (Total: **${confirmed}** | Hoje: **${todayconfirmed}**) \nMortes: (Total: **${deaths}** | Hoje: **${todaydeaths}**) \nRecuperados: **${recovered}** \nEm risco: **${critical}** \nAtivos: **${active}**\n\nTestes/1M: **${tests}**\nCasos/1M: **${casesperm}**\nMortes/1M: **${deathperm}**`)
      .setTimestamp()
      .setFooter(message.author.tag);
      message.channel.send(embed);
    })
  }
}