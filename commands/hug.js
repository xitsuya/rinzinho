const Discord = require("discord.js")
exports.run = (bot, message, args) => {


    let user = message.mentions.users.first(); 
    let randomNumber = Math.floor(Math.random() * 15);

    var embed = new Discord.RichEmbed()
    .setColor("#91489a")
    .setDescription(" Abraçando **"+ message.author.username+"** de volta! ♥" )
    if(user.id === "366922505480568852") return message.channel.send({embed});


    var embed = new Discord.RichEmbed()
    .setColor("#91489a")
    .setDescription("**É uma pena que você não tenha ninguém para abraçar.**")
    .setImage(" ")
    if(user.id === message.author.id)return message.channel.send({embed});
    

    
    if (randomNumber === 1) {
        var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-1.discordapp.net/external/z2LjXQyW8LHf8k4WpczE74y-mEkNQzI44LFALp23eFs/https/cdn.weeb.sh/images/S18oOuQw-.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 2) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l1J9u1ncZEhyMLANa/giphy.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 3) {var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwFPVNo5m4Kqsco/giphy.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 4) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwrTGecoPBmANfW/giphy.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 5) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l1J9qvNSEG8pehNcs/giphy.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 6) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ov9jDgo8BEthkE6fC/giphy.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 7) {var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-1.discordapp.net/external/Tnl3YyHsl13FgxUQ3ggqZhlypdr7eaUbZdF7UeEnm4g/https/cdn.weeb.sh/images/BJ0sOOmDZ.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 8) {
        var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-1.discordapp.net/external/W24dpvbkVkJh9wwcQVeq8hMKo2To0WH0z0Rqh7isv7Y/https/cdn.weeb.sh/images/BkZngAYtb.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 9) {
        var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-2.discordapp.net/external/HfUcuu3QvK8oEoY0etyGi10DGyKB2TSXlMXu2xvCt80/https/cdn.weeb.sh/images/HyllFdmwZ.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 10) {
        var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-1.discordapp.net/external/u-06dasD5ypmKqmirfEI_1R57S2ukXb_bIIFFWUujn8/https/cdn.weeb.sh/images/HkQs_dXPZ.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 11) {
      var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-2.discordapp.net/external/Mjq0LUze9WBW9_S4YV6GDUixFNoSCwpcSABvmRjdV6w/https/cdn.weeb.sh/images/BkotddXD-.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 12) {
        var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-1.discordapp.net/external/wAyWJ2zQIZLxoJCBsnL5xmDJL_f20u9wfU9I9ilbEsU/https/cdn.weeb.sh/images/rJnKu_XwZ.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 13) {
        var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-1.discordapp.net/external/5oXkEEAHxAPmHQxNkjQMxdyE4vbHaedZnMrhoQ-RVsQ/https/cdn.weeb.sh/images/SJWR__7P-.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 14) {
        var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-2.discordapp.net/external/yRvu_a4iNHg4rYs5oWPHPgTt2WkCZe_YwW4tlpzdtt8/https/cdn.weeb.sh/images/rJaog0FtZ.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
      } else if (randomNumber === 15) {
        var embed = new Discord.RichEmbed()
        .setImage("https://images-ext-2.discordapp.net/external/Ki4ytGZlwiyMkKqBrL6Jvxj01A6_TQ5-wbIB-MmqWp4/https/cdn.weeb.sh/images/Hk3ox0tYW.gif")
        .setColor("#91489a")
        .setDescription("**" + user.username + "**, você ganhou um abraço de  **" + message.author.username+"**")
        message.channel.sendMessage({embed})
    } 
    bot.user.setActivity(message.guild.memberCount + " Minions! ❤")
        }