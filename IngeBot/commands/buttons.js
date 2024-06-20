//LEONARDO DANIEL RAMÍREZ MEDINA
//6E1 - 21310138
//BOT DE DISCORD

const {ButtonBuilder, ActionRowBuilder} = require('discord.js');
//const { description, run } = require('./say');

const usernameButton = new ButtonBuilder()
    .setLabel('Mostrar nombre de usuario')
    .setStyle('1')
    .setCustomId('username')
    .setEmoji('📜');

    const avatarButton = new ButtonBuilder()
    .setLabel('Mostrar avatarde usuario')
    .setStyle('2')
    .setCustomId('avatar')
    .setEmoji('🖼️');

    module.exports = {
        description: 'Envía dos botones, uno para mostrar el nombre de usuario y otro para mostrar el avatar del usuario',
        run: async (message) => {
            const actionRow = new ActionRowBuilder()
                .addComponents(usernameButton)
                .addComponents(avatarButton);
            
            const reply = await message.reply({components: [actionRow]});

            //crear recolector de mensajes
            const filter = (interaction) => interaction.user.id === message.author.id && interaction.message.id === reply.id;
            const collector = message.channel.createMessageComponentCollector({
                filter, time: 60 * 1000 // 1 min en milisegundos
            });

           //cuando el recolector esté activo
            collector.on('collect', async (interaction) => {
                if (!interaction.isButton()) return; // Asegúrate de que la interacción sea un botón

                if (interaction.customId === 'username') {
                    // Usa interaction.user para obtener información del usuario que interactuó
                    interaction.update({content: `Nombre de usuario: ${interaction.user.username}`, components: []})
                        .catch(console.error); // Manejo de errores
                } else if (interaction.customId === 'avatar') {
                    const avatar = interaction.user.displayAvatarURL({size: 512}); // Usa interaction.user

                    //respuesta
                    interaction.update({
                        content: 'Tu imagen de perfil es:',
                        files: [avatar],
                        components: []
                    }).catch(console.error); // Manejo de errores
                }
            });

            //cuando el recolector termine al minuto
            collector.on('end', async () => {
                reply.edit({components: []}).catch(console.error); // Asegúrate de manejar errores aquí también
            });
        } 
    }