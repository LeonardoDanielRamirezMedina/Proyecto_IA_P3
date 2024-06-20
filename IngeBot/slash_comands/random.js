//LEONARDO DANIEL RAMÍREZ MEDINA
//6E1 - 21310138
//BOT DE DISCORD

const Discord = require("discord.js")

module.exports = {
    //Datos del comando
    data: new Discord.SlashCommandBuilder()
        .setName("random")
        .setDescription("Genera un numero random del 1 al 10"),
    //ejecución del comando
    execute: async (interaaction) => {
        //generar un numero aleatorio
        const randomNum = Math.floor(Math.random()*10);

        //respuesta
        interaction
            .reply('Tu nuemro aleatio es: ${randomNum}')
            .catch(console.error);//manejo de excepcion


    }
}