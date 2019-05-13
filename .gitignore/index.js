const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*sprite"

client.login("NTYxNTY4Mzc2NzQ5Njg2Nzg0.XJ-IEA.QpEvKW01ZSAXixPQXluiuHy0gak");

client.on('message' , message=>{
    if(message.content === "*sprite membre"){
        message.reply("Il y a 2 membres actuelement !");
        console.log('logs');
    }
})

client.on('message' , message=>{
    if(message.content === "*sprite Staff"){
        message.reply('Fondateur : ajoute un staff *pub addstaff');
        console.log('logs1');
    }
})

client.on('message' , message=>{
    if(message.content === "*sprite Staff"){
        message.reply('Fondateur : ajoute un staff *pub addstaff');
        console.log('logs1');
    }
})

client.on('message' , message=>{
    if(message.content === "*sprite secu"){
        message.reply("@everyone Sécuriter activée avec sucess !");
        console.log('un membre viens de faire help');
    }
})

        
