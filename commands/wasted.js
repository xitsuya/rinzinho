const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  let randomNumber = Math.floor(Math.random() * 8);
  if (randomNumber === 1) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://images-ext-1.discordapp.net/external/5gWWY_xqzhR914VnkAnRl8FCEcE29F65C-R15ffTjqM/https/cdn.weeb.sh/images/B1VnoJFDZ.gif"
      )
      .setColor("#91489a")
      .setDescription("<@" + message.author.id + "> *Got Wasted*");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 2) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://images-ext-1.discordapp.net/external/e8238C-iXxfFlnuzY5unlLwkTTODuS2hfQjic39k6yo/https/cdn.weeb.sh/images/B1qosktwb.gif"
      )
      .setColor("#91489a")
      .setDescription("<@" + message.author.id + "> *Got Wasted*");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 3) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://images-ext-2.discordapp.net/external/WYQmIFpoxHZqvX_U-HiOMFDyXuOZvigYVNBsEKBxqlA/https/cdn.weeb.sh/images/r11as1tvZ.gif"
      )
      .setColor("#91489a")
      .setDescription("<@" + message.author.id + "> *Got Wasted*");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 4) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://images-ext-1.discordapp.net/external/4nztNvTnX0WDlvW0n71rLjgLbQt-yHY-kD4nrBoPB0I/https/cdn.weeb.sh/images/HyXTiyKw-.gif"
      )
      .setColor("#91489a")
      .setDescription("<@" + message.author.id + "> *Got Wasted*");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 5) {
    var embed = new Discord.RichEmbed()
      .setImage("https://media.giphy.com/media/3ov9k09GrGnxSQLmk8/giphy.gif")
      .setColor("#91489a")
      .setDescription("<@" + message.author.id + "> *Got Wasted*");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 6) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/367450857039593475/367737802110271489/6RuKoez.gif"
      )
      .setColor("#91489a")
      .setDescription("<@" + message.author.id + "> *Got Wasted*");
    message.channel.send({ embed });
  } else if (randomNumber === 7) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/367450857039593475/367740266989486090/tenor.gif"
      )
      .setColor("#91489a")
      .setDescription("<@" + message.author.id + "> *Got Wasted*");
    message.channel.send({ embed });
  } else if (randomNumber === 8) {
    var embed = new Discord.RichEmbed()
      .setImage("https://media.giphy.com/media/l1J9Gj5Z2gldp4dMs/giphy.gif")
      .setColor("#91489a")
      .setDescription("<@" + message.author.id + "> *Got Wasted*");
    message.channel.send({ embed });
    bot.user.setActivity(message.guild.memberCount + " Minions! ❤");
  }
};
