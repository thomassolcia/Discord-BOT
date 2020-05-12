# Changelog

Todas as modificações notáveis deste projeto será documentada neste arquivo.

Este formato é baseado no [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [2.1] - 2020-05-11
### Modificado
- Todos comandos NSFW quando não utilizados na sala específica, recebe um `emoji` como resposta e é bloqueado.
- Ao passar de 24 horas, o uptime agora é convertido automaticamente para 1 dia e assim em diante.
- Mensagem de erro alterada em `=roll`

### Adicionado
- `=hex` mostra a cor de qualquer hex desejado.
- `lenny` sorteia uma lennyface.
- `moeda` tira cara ou coroa.

### Removido
- `guildCreate` e `guildDelete` não estavam sendo utilizado até o momento.

### Consertado
- Em `=tempo` algumas localizações travavam o bot pelo fato de não consatem no banco de dados da biblioteca. Agora uma mensagem é mostrada quando isso ocorre e o bot continuará funcional.
- Alguns erros não estavam sendo tratados, causando o encerramento do bot. Agora, sempre que houver um erro, ele será notificado pelo mesmo e o bot continuará funcional.
- Erros de grafia corrigidos em `=comandos`.

## [2.0] - 2020-05-09
### Consertado
- Alterações na forma como era mostrado o uptime do bot. Agora a taxa de atualização é de 1 minuto ao invés de 5 segundos. Não era necessário ter essa taxa tão rápida, apenas aumentavam as instabilidades.
- Não é mais possível o envio de mensagens privadas ao bot. Isso fazia com que ele parasse de funcionar com comandos específicos. Somente mensagens dentro do próprio servidor estão ativas.

### Modificado
- Cor padronizada `green` em comandos `diversos`.
- Cor padronizada `blue` em comandos `informativos`.
- `=Bot` foi adicionado há quantos dias o bot foi criado e teve o embed remodelado.
- `=Comandos` foi atualizado.
- `=Ping` teve o embed adicionado.
- `=Year` teve o embed remodelado juntamente com algumas correções.
- Cor padronizada `red`.

### Adicionado
- `=Tempo` mostra o clima em alguma cidade específica.
- A categoria NSFW foi adicionada ao bot com cor padrão `black`.
- Alguns comandos adicionados para teste na categoria NSFW.

## [1.3] - 2020-05-04
### Modificado
- Os `commands` foram dividos por pastas. Cada uma contendo comandos específicos relacionados àquela categoria.
- O status do bot agora fica estável em `Jogando =comandos`.

### Adicionado
- `=ascii` Transforma uma palavra ou frase curta em um texto ascii.
- `=biscoito` Envia um biscoito para a pessoa mencionada.
- `=imgur` Automaticamente envia uma imagem específica para o imgur gerando o link da mesma.
- `=lembrete` Cria um lembrete para você. O bot avisa quando estiver na hora.
- `=morse` Transforma uma palavra ou frase curta em um código morse.
- `=sugerir` Envia uma sugestão na sala específica para sugestões.
- `=tapa` Da um tapa na pessoa mencionada.
- `=year` Mostra quantos dias faltam até o fim do ano.
- `=listban` Envia uma lista dos usuários que estão banidos no servidor.
- Duas salas específicas, uma para mostrar há quanto tempo o bot está ativo e outra para mostrar a data da ultima atualização do mesmo.

## [1.2] - 2020-05-02
### Modificado
- `=Comandos` foi novamente reestruturado.
- `=Roll` foi remodelado, `r -> Roll`.

### Adicionado
- `=Avatar` puxa o avatar de algum usuário do servidor.
- `=Ban` bane alguém do servidor.
- `=Bot` informações sobre o bot.
- `=Poll` cria uma votação e como respostas tem dois emojis.
- `=Server` mostra informações sobre o servidor.
- `=User` mostra indormações sobre um usuário específico.
- `=Users` mostra informações gerais dos usuários do servidor.
- Agora é possível colocar em uma sala específica o número de usuários online no servidor e o ping atual da API em relação ao bot, o nome dessa sala irá ser alterada em tempo real de acordo com as informações recebidas pelo bot.
- Foi adicionado uma função para proibir a `m-word` dentro do servidor.

## [1.1] - 2020-04-29
### Modificado
Bot reestruturado. Foram criadas duas divisões entre as funcionalidades `commands` e `events`.
- `=comandos` agora em uma nova estrutura.
- `=limpar` agora tem a opção de escolher a quantia de mensagens que deseja apagar.
- `=r` foi remodelado, `rd -> r`.

### Adicionado
- `=kick` expulsa a pessoa mencionada do servidor.
- `=nick` altera o seu apelido dentro do servidor.
- `=reload` recarrega um comando sem precisar reiniciar o bot.
- `=uptime` mostra o tempo em que o bot está ativo.
- `ready` realiza algo enquanto o bot está ativo.
- `message` realiza algo quando o bot recebe uma mensagem específica.
- `guildMember_Remove` realiza algo quando alguém sai do servidor.
- `guildMember_Add` realiza algo quando alguém entra do servidor.
- Outros events.

## [1.0] - 2020-04-27
### Adicionado
- Versão inicial do bot.
- `index.js` contendo todos os comandos
- `=ping` para ver o ping com o bot.
- `=comandos` para ver todos os comandos do bot.
- `=sorte` para testar sua sorte.
- `=rd` para rolar um tipo específico de dado.
- `=limpar` para limpar 100 mensagens no canal atual.