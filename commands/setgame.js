const Discord = require("discord.js")
exports.run = (bot, message, args) => { 
 bot.user.setGame(message.guild.memberCount + " Membros! ❤")
    bot.user.setActivity("Atualmente temos: "+ message.guild.memberCount + " Membros! ❤")

        }