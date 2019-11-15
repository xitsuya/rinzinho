const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  bot.user.setActivity(message.guild.memberCount + " Minions! ❤");
  message.channel.send(
    "Atualmente temos: " + message.guild.memberCount + " Minions! ❤"
  );
};
