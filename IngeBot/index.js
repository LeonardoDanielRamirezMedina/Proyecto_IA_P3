//LEONARDO DANIEL RAMÍREZ MEDINA
//6E1 - 21310138
//BOT DE DISCORD

//archivo index.js 

const {Client, Events} = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

//crear nuevo cliente de discord
const client = new Client({
    intents: 3276799
});

//cargar comandos slash
//fs.readdirSync("./slash_commands")

//crear nuestro primer evento
client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user.username}!`);
});

//Respuesta a mensajes
client.on(Events.MessageCreate, async (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith('-')) return;

    const args = message.content.slice(1).split(' ')[0]

    if(args === 'hola') message.reply('Hola, ¿Cómo estás?');
    if(args === 'adios') message.reply('Hasta luego!');
    if(args === 'bye') message.reply('Adios!');
    if(args === '!help') message.reply('Puedes recibir ayuda abriendo un tiket de soporte');


    //text command handler
    try {
      const command = require(`./commands/${args}`);
        command.run(message);
    } catch (error) {
        console.log('ha ocurrido un error al utilizar el comando -${args}', error.message);
    }

});

client.on(Events.MessageCreate, async (message) => {
    if(message.content === '!help'){message.channel.send('Puedes recibir ayuda abriendo un tiket de soporte');}
});

//Conectar nuestro cliente con la aplicación de discord
client.login('MTI1MjgzOTA5MjE4MjU4NTM1NA.Gf9yBr.RWBy5x-Tg7dg1W-Cd7jNgx_zfyp3Qx9TT1Lnd8')

