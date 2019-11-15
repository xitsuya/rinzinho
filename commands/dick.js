const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  let guild = message.guild;
  let xp = guild.channels.find("name", "3d-male");
  if (message.channel != xp) return;

  let randomNumber = Math.floor(Math.random() * 70);

  if (randomNumber === 1) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/367136059877752833/image.png"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 2) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/367058234999046144/IMG_20170922_005736.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 3) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/366922783134973962/received_1074168542665156.jpeg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 4) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/366697666740092928/IMG_20171004_174316.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 5) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/366396013918945281/IMG_4126.JPG"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 6) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/366386732297355264/IMG_20170818_034523.jpg"
      )
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">")
      .setColor("#91489a");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 7) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/366303040988381184/gifanime_2017.10.07_21.09.04.gif"
      )
      .setColor("#91489a")
      .setDescription("Um gif de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 8) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/366067568709992448/image.jpg"
      )
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">")
      .setColor("#91489a");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 9) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/365869480540241921/20170818_140455.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 10) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/365601843193315338/me_masturbatin3.png"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 11) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/365434808165203968/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 12) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/365291005760634880/me.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 13) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/364675964527181825/20170828_005112.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 14) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/362486132635729921/20170915_142252.png"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 15) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/362486942233001984/20170927_013250.png"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 16) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/361224343386193922/IMG_1987.JPG"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 17) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/359184774344081408/IMG_20170917_205125.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 18) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/358234597651382272/20645722_1862920574025808_1053482907_n.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 19) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/357168337031135233/Untitled_6.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 20) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/356629466765721600/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 21) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/356180464454598656/Snapchat-147156551.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 22) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/354908662751559682/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 23) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/354788805984649219/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 24) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/354638198699458560/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 25) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/354091508531724289/IMG20170731052851.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 26) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/353828603710144524/20170713_002905.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 27) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/353573915022458880/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 28) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/353104363381850122/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 29) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/353088750055849995/JPEG_20170827_074626.jpg"
      )
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">")
      .setColor("#91489a");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 30) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/352327359472599040/received_1216623758391294.jpeg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 31) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/351690568885338132/zIN4t85.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 32) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/351445758307991552/dick.jpg"
      )
      .setColor("#91489a")
      .setFooter("vergonha_alheia.png")
      .setTimestamp();
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 33) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/350142555658387456/JPEG_20170824_000056.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 34) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/349956484236312576/cock2.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 35) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/349773595435728897/received_1485426304844370.jpeg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 36) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/349287850031972352/IMG_1966.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 37) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/347928918013116418/20170818_102413.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 38) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/347884233391341579/20170815_210306.png"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 39) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/347788399479881729/IMG_20170817_210241.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 40) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/347520872212594688/Snapchat-738466372.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 41) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/346955241545269248/IMG_4007.JPG"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 42) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/345805977544818688/IMG_20170811_232509.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 43) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/345778797762838531/received_1951184398473645.jpeg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 44) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/345077787410956298/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 45) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/344833030537347083/IMG_1917.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 46) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/344501770103554052/IMG_20170808_183426.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 47) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/344080306850234389/image-20170807_152656.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 48) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/343887758684585984/gif8.gif"
      )
      .setColor("#91489a")
      .setDescription("Um gif de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 49) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/343816371102285845/347_1000.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 50) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/343431467361239040/IMG_20170805_132258.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 51) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/342803132322938881/20170721_171336.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 52) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/342642641164304385/IMG_20170803_161445.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 53) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/341486126281916416/20170731_003215.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 54) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/340891896241192961/IMG_20170729_201438.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 55) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/339426773001437185/Snapchat-1870398431.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 56) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/339282300657205248/3847748.gif"
      )
      .setColor("#91489a")
      .setDescription("Um gif de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 57) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/339224083139133440/20170723_182252_RichtoneHDR.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 58) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/338767779911958528/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 59) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/338516476874981378/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 60) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/338229972751745024/Snapchat-1683780506.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 61) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/337687035030798336/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 62) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/337660127643435008/download_1.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 63) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/336906426196688896/20170718.jpeg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 64) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/303322390505455638/IMAG0126.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 65) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/303323231442698240/image.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 66) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/336735943719387140/JPEG_20170630_041429.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 67) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/336069681662263297/20170716_032008.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 68) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/303526472193277952/eyJ1cmwiOiJodHRwczovL2Rpc2NvcmQuc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9hdHRhY2htZW50cy8yOTc3NTY1MjI0NzIyNzU5.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 69) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/349348829403021313/350156717377585153/20170511_232941.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  } else if (randomNumber === 70) {
    var embed = new Discord.RichEmbed()
      .setImage(
        "https://cdn.discordapp.com/attachments/251939102788681728/303327178744004610/JPEG_20170417_022502.jpg"
      )
      .setColor("#91489a")
      .setDescription("Uma foto de peloca para: <@" + message.author.id + ">");
    message.channel.sendMessage({ embed });
  }
  bot.user.setActivity(message.guild.memberCount + " Minions! ❤");
};
