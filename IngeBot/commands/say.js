//LEONARDO DANIEL RAMÍREZ MEDINA
//6E1 - 21310138
//BOT DE DISCORD

module.exports = {
    description: 'Repite los argumentos dados.',
    run: async (message) => {
        const args = message.content.split(' ').slice(1).join(' ');

        if(args.length < 1) return message.reply('Escribe un argumento válido');
        
        message.reply(args);

    }


}
