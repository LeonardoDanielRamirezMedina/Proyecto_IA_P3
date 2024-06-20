import discord

from discord.ext import commands

intents = discord.Intents.all()
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'Conectado como {bot.user.name}!')

@bot.event
async def on_message(message):
    if message.author == bot.user:
        return
    if message.content == 'hola':
        await message.channel.send('Saludos!')

# Conectar nuestro cliente con la aplicación de discord
bot.run('MTI1MjgzOTA5MjE4MjU4NTM1NA.Gf9yBr.RWBy5x-Tg7dg1W-Cd7jNgx_zfyp3Qx9TT1Lnd8')
