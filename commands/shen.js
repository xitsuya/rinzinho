const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  let guild = message.guild;
  let xp = guild.channels.find("name", "nsfw-yaoi");
  if (message.channel != xp) return;
  let randomNumber = Math.floor(Math.random() * 33);
  if (randomNumber === 1) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368599822103740427/8a44f3b82f4c08b476cadd7ab24239f0.jpeg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 2) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368599854118862850/92XEKkX.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 3) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368599915359895552/5a0d77b24341e90b44fdff0730e6f0e25c9c0253.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 4) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368600855026466827/75436fc9b2ff13f06e6d5b13a8ac64ef25ba0bdc.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 5) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368600909908934676/1818171-Bogrim-League_of_Legends-Shen-zed.jpg"
      )
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      )
      .setColor("#91489a");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 6) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368600960429195274/1480854_-_Katarina_Du_Couteau_League_of_Legends_PreyingPhantom.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 7) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368600995112157194/1619232_-_Elise_League_of_Legends_Shen_the-essential-squid_thresh.jpg"
      )
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      )
      .setColor("#91489a");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 8) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601203434848256/20150921135426-924db4d0-cu_s9999x200.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 9) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601208975261706/1838400-League_of_Legends-Lee_Sin-Shen.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 10) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601214234918913/1870829-League_of_Legends-Shen-zed.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 11) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601249970651137/1870930-League_of_Legends-Master_Yi-Shen-Yasuo.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 12) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601447102939146/2250468-Katarina_Du_Couteau-KimMundo-League_of_Legends-Shen.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 13) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601855644663809/20160604142911-8e6376f6-cu_s9999x200.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 14) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601856328466433/20160604142957-6f160a48-cu_s9999x200.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 15) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601856387186689/13838772001383769550424-me.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 16) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601863119175680/20160120181249-f99931c2-me.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 17) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368601897751281664/1363923007175815.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 18) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602047420825601/images.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 19) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602053771001857/a9221d2b1f1064003f146e9a65e623aa9b829e62.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 20) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602359380705280/tumblr_o9hov9fT1i1v2vm1ao1_500.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 25) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602362375438347/O0hIlto.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 26) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602377034661919/LoL_Akali_2-me.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 27) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602402846277636/tumblr_inline_omm3asL0No1r2oe3g_500.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 28) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602408214855680/tumblr_o5nteqJWvj1ugbnf4o1_500.png"
      )
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      )
      .setColor("#91489a");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 29) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602756740808704/ZMJhxvn.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 30) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602763761942547/tumblr_ob4ogjqhPs1qj40kfo1_500.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 31) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602775237558273/vgObD3U.jpg"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 32) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602795428806657/tumblr_oa3bwhlF431vz14cso1_r2_500.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 33) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/368599753648373770/368602797501054987/unknown.png"
      )
      .setColor("#91489a")
      .setDescription(
        "Uma bela foto do shen para: <@" + message.author.id + ">"
      );
    message.channel.sendMessage({ embed });
  }
  bot.user.setActivity(message.guild.memberCount + " Minions! ❤");
};
