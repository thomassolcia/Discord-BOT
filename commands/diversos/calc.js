const Discord = require("discord.js");
const config = require("../../config.json");
const moment = require("moment");

exports.run = async (client, message, args) => { 

    let math = require('math-expression-evaluator');
    let calcArgs = message.content.split(' ').slice(1).join(' ');

    if (!calcArgs[0]) {
        message.channel.send({embed: {
            color: 3447003,
            footer: {
              icon_url: client.user.avatarURL,
              text: "Coloque uma expressão para o cálculo."
            }
          }
        });
    }
    let calcResult;
    try {
        calcResult = math.eval(calcArgs);
    } catch (e) { 
        calcResult = 'Error: "Input inválido"';
    }

    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: 'Proerd\'s calculator',
          icon_url: client.user.avatarURL
        },
        fields: [
            { name: "Input", value: `\`\`\`js\n${calcArgs}\`\`\`` },
          { name: "Output", value: `\`\`\`js\n${calcResult}\`\`\`` }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: message.author.tag
        }
      }
    });
}