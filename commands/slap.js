const Discord = require("discord.js")
exports.run = (bot, message, args) => {


    let user = message.mentions.users.first(); 
    let randomNumber = Math.floor(Math.random() * 15);
    
    var embed = new Discord.RichEmbed()
    .setColor("#91489a")
    .setDescription("ado ado ado quem me bater é viado")
    if(user.id === "366922505480568852") return message.channel.send({embed})

    var embed = new Discord.RichEmbed()
    .setImage("https://media.giphy.com/media/J4mSp4Rf7aukM/giphy.gif")
    .setColor("#91489a")
    .setDescription("**"+message.author.username+" **, *Já que você quer apanhar ツ*")
    if(user.id === message.author.id) return message.channel.send({embed})


    
    if (randomNumber === 1) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/xT9IglHt86pZct5EuQ/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 2) {
        var embed = new Discord.RichEmbed()
        .setImage("https://cdn.discordapp.com/attachments/367450896059203594/368632052649558016/slap2.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 3) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l0IsGwW33Odz0XcUU/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 4) {var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l0IsHLeROgfz7nx1C/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 5) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/xT9Igv1KvHDLUE1rsk/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 6) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/26n7aArbfkU9oPAI0/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 7) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3o7aDgBvjDjCY601tm/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 8) {       
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3o7aCYQ5Jo2QY2VvYA/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 9) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3o7aCYBL609avbZmUM/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 10) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l378utY2eTf5tvqWk/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 11) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l378je0z3Vi6s5TCo/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 12) {
var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ov9jRsgCabyZFdM2Y/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 13) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/xT9IgoGkacxQlmBPS8/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 14) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/xT9Ighc2g2mxc7Hzj2/giphy.gif   ")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 15) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l378B4YoQm2JS8MOA/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" ** *levou um tapa* de **"+message.author.username+"**")
        message.channel.sendMessage({embed})
    }
    bot.user.setActivity(message.guild.memberCount + " Membros! ❤")
}