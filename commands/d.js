const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    message.delete()
    bot.user.setActivity(message.guild.memberCount + " Membros! ❤")
        }