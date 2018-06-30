const Discord = require("discord.js")
exports.run = (bot, message, args) => { 
 bot.user.setActivity(message.guild.memberCount + " Membros! ❤")
    message.channel.send("Atualmente temos: "+ message.guild.memberCount + " Membros! ❤")

        }