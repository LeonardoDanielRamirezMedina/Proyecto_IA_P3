//LEONARDO DANIEL RAMÍREZ MEDINA
//6E1 - 21310138
//BOT DE DISCORD

const {EmbedBuilder} = require("discord.js");


module.exports = {
    description: 'Muestra la imagen de perfil del ususario',
    run: async (message) => {
        const target = message.mentions.users.first() || message.author;
        const member = await message.guild.members.fetch(target.id);


        if(!member) return message.reply('Introduce un usuario válido');
        const avatar = member.user.displayAvatarURL({size: 512});

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle(`Avatar de: ${member.user.displayName}`)
            .setImage(avatar)

        message.reply({embeds: [embed]});

    }
}
