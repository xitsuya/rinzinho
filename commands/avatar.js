aconst Discord = require("discord.js");
exports.run = (bot, message, args) => {
  bot.user.setActivity(message.guild.memberCount + " Minions! ❤");
  let parts = message.content.split(" ");
  let user = message.mentions.users.first();
  let guild = message.guild;
  let xd = guild.channels.find("name", "rin-bot");

  var embed = new Discord.RichEmbed();
  var embed = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    .setAuthor(message.author.tag + " | Baixe AQUI o seu Avatar!")
    .setFooter("Executado por: " + message.author.tag)
    .setTimestamp()
    .setColor("#91489a")
    .setURL(message.author.avatarURL);
  if (message.mentions.users.size < 1)
    return xd.send({ embed }).then(message => {
      var embed = new Discord.RichEmbed()
        .setAuthor(" |     Rin-Bot", message.author.avatarURL)
        .setDescription("Mandei o seu avatar no canal <#381522652356935680>!")
        .setTimestamp()
        .setColor("#91489a");
      message.channel.send({ embed });
    });

  var embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setDescription(
      "Mandei o avatar do usuário mencionado no canal <#381522652356935680>"
    )
    .setFooter("Executado Por: " + user.tag)
    .setTimestamp()
    .setColor("#91489a");
  message.channel.send({ embed });
  var embed = new Discord.RichEmbed()
    .setImage(user.avatarURL)
    .setAuthor(user.tag + " | Baixe AQUI o seu Avatar!")
    .setFooter("Executado por: " + user.tag)
    .setTimestamp()
    .setColor("#91489a")
    .setURL(user.avatarURL);
  xd.send({ embed });
};
