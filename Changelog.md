# Changelog

Todas as modificações notáveis deste projeto será documentada neste arquivo.

Este formato é baseado no [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [v2.0] - 09.05.2020

### Commands
#### Diversos

- Cor padronizada `green`.

#### Informativos

- Cor padronizada `blue`.
- `=Bot` foi adicionado há quantos dias o bot foi criado e teve o embed remodelado.
- `=Comandos` foi atualizado.
- `=Ping` teve o embed adicionado.
- `=Tempo` foi criado.
- `=Year` teve o embed remodelado juntamente com algumas correções.

#### Staff

- Cor padronizada `red`.

#### Nsfw

- Cor padronizada `black`.
- Alguns comandos adicionados para teste.

### [Events]
#### Ready
Teve alterações na forma como era mostrado o uptime do bot. Agora a taxa de atualização é de 1 minuto ao invés de 5 segundos. Não era necessário ter essa taxa tão rápida, apenas aumentavam as instabilidades.

#### Message

Foi modificado para não ser possível o envio de mensagens privadas ao bot. Isso fazia com que ele parasse de funcionar. Somente mensagens dentro do próprio servidor estão ativas.

## [v1.3] - 04.05.2020
### Commands

Foi divido por pastas. Cada uma contendo comandos específicos relacionados àquela categoria.

#### Diversos

`=ascii` foi criado. Transforma uma palavra ou frase curta em um texto ascii.
`=biscoito` foi criado. Envia um biscoito para a pessoa mencionada.
`=imgur` foi criado. Automaticamente envia uma imagem específica para o imgur gerando o link da mesma.
`=lembrete` foi criado. Cria um lembrete para você. O bot avisa quando estiver na hora.
`=morse` foi criado. Transforma uma palavra ou frase curta em um código morse.
`=sugerir` foi criado. Envia uma sugestão na sala específica para sugestões.
`=tapa` foi criado. Da um tapa na pessoa mencionada.

#### Informativos

`=year` foi criado. Mostra quantos dias faltam até o fim do ano.

#### Staff

`=listban` foi criado. Envia uma lista dos usuários que estão banidos no servidor.

### Events
#### Ready

O status do bot agora fica estável em `Jogando =comandos`. Também foram adicionadas duas salas específicas, uma para mostrar há quanto tempo o bot está ativo e outra para mostrar a data da ultima atualização do mesmo.

## [v1.2] - 02.05.2020
### Commands

- `=Avatar` puxa o avatar de algum usuário do servidor.
- `=Ban` bane alguém do servidor.
- `=Bot` informações sobre o bot.
- `=Comandos` foi atualizado.
- `=Poll` cria uma votação e como respostas tem dois emojis.
- `=Roll` foi remodelado, `r -> Roll`.
- `=Server` mostra informações sobre o servidor.
- `=User` mostra indormações sobre um usuário específico.
- `=Users` mostra informações gerais dos usuários do servidor.

### Events
#### Ready

Agora é possível colocar em uma sala específica o número de usuários online no servidor e o ping atual da API em relação ao bot, tudo em tempo real.

#### Message

Foi adicionado uma função para proibir a `m-word` dentro do servidor.

## [v1.1] - 29.04.2020

Bot foi reestruturado e foram criadas duas divisões entre as funcionalidades.
- `Commands` para inserção de todos os comandos.
- `Events` para inserção de eventos. 

### Commands
- `=comandos` lista contendo todos os comandos.
- `=kick` expulsa a pessoa mencionada do servidor.
- `=limpar` limpa de 1 até 100 mensagens de um canal.
- `=nick` altera o seu apelido dentro do servidor.
- `=ping.` mostra o ping com o bot.
- `=r` foi remodelado, `rd -> r`.
- `=reload` recarrega um comando sem precisar reiniciar o bot.
- `=sorte` testa a sua sorte.
- `=uptime` mostra o tempo em que o bot está ativo.

### Events
- `ready`
- `message`
- `guildMember_Remove`
- `guildMember_Add`
- entre outros eventos.

## [v1.0] - 27.04.2020

- Versão inicial do bot.
- `index.js` contendo todos os comandos
- `=ping` para ver o ping com o bot.
- `=comandos` para ver todos os comandos do bot.
- `=sorte` para testar sua sorte.
- `=rd` para rolar um tipo específico de dado.
- `=limpar` para limpar 100 mensagens no canal atual.