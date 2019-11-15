const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  message.delete();
  let argsJunto = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  message.channel.send(argsJunto);
  bot.user.setActivity(message.guild.memberCount + " Minions! ❤");
};
