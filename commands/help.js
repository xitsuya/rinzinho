const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  var embed = new Discord.RichEmbed()
    .setAuthor("Rin-Bot")
    .setColor("#91489a")
    .setTimestamp()
    .setTitle("Esses são meus comandos de moderador!")
    .setFooter(
      "Rin-Bot",
      "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048"
    )
    .addField("+ban", "Vou banir um membro e fazer um mini log")
    .addField("+clear", "Vou apagar o numero de mensagens especificado")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/366919262675402775/367009151416533002/zUsaJnn.png"
    );
  message.member.send({ embed });
  var embed = new Discord.RichEmbed()
    .setAuthor("Rin-Bot")
    .setColor("#91489a")
    .setTimestamp()
    .setTitle("Esses são meus comandos de utilitários!")
    .setFooter(
      "Rin-Bot",
      "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048"
    )
    .addField(
      "+help",
      "Você irá receber todos os meus comandos no seu privado!"
    )
    .addField(
      "+serverinfo",
      "Irei mandar as informações do servidor em um canal separado"
    )
    .addField(
      "+userinfo",
      "Irei mandar a sua ou as informações de um membro mencionado em um canal separado"
    )
    .addField(
      "+avatar",
      "Irei mandar o seu ou a foto de perfil de um membro mencionado em um canal separado"
    )
    .setThumbnail("https://i.imgur.com/T6yuuvi.png");
  message.member.send({ embed });
  var embed = new Discord.RichEmbed()
    .setAuthor("Rin-Bot")
    .setColor("#91489a")
    .setTimestamp()
    .setTitle("Esses são meus comandos voltados para diversão!")
    .setFooter(
      "Rin-Bot",
      "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048"
    )
    .addField("+lenny", "Vou mandar uma lenny face aleatória no chat ° ͜ʖ ͡ – ✧")
    .addField(
      "+hug",
      "Irei mandar um abraço de sua parte para um usuário mencionado!"
    )
    .addField(
      "+kiss",
      "Irei mandar um beijo de sua parte para um usuário mencionado!"
    )
    .addField("+sayd", "Vou dizer qualquer coisa que você comandar!")
    .addField("+wasted", "Y O U  G O T  W A S T E D")
    .addField("+slap", "Irei dar um tapa em alguem quem você mencionar")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/366919262675402775/367008538486374400/CfFFfWD.png"
    );
  message.member.send({ embed });
  var embed = new Discord.RichEmbed()
    .setAuthor("Rin-Bot")
    .setColor("#91489a")
    .setTimestamp()
    .setTitle("Esses são meus comandos NSFW")
    .setFooter(
      "Rin-Bot",
      "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048"
    )
    .addField("+dick", "mandarei uma peloca pra quem desejar!")
    .addField("+shen", "mandarei uma foto do shen para quem desejar!")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/366919262675402775/367013775293022209/s2C1aDH.png"
    );
  message.member.send({ embed });
  message.react("✅");
  message.channel.send("Mandarei meus comandos no seu privado!");
  bot.user.setActivity(message.guild.memberCount + " Minions! ❤");
};
