const Discord = require("discord.js")
exports.run = (bot, message, args) => {


    let user = message.mentions.users.first(); 
    let randomNumber = Math.floor(Math.random() * 15);
    var embed = new Discord.RichEmbed()
    .setColor("#91489a")
    .setDescription("Retribuindo com um beijinho na bochecha :heart:")
    if(user.id === "366922505480568852") return message.channel.send({embed})
    if(user.id === "213798448745545728") return message.channel.send({embed})

    var embed = new Discord.RichEmbed()
    .setColor("#91489a")
    .setDescription("Desculpe por você não ter um par... ;-;")
    if(user.id === message.author.id) return message.channel.send({embed})
    
    if (randomNumber === 1) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwfJwfI0vRv1Bi8/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 2) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/26n790zvRoToNIJAA/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 3) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l1J9ASL6lVX9qyVe8/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 4) {
      var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwnJUuRfd0lxbIA/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 5) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwfBFKTBO8RGymA/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 6) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/26n7aArbfkU9oPAI0/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 7) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/26n79pI1UAVZ4Dmco/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 8) {var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l1J9RnQHQoO2ye8ow/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 9) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwfj6nxtbHmVsJO/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 10) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwxTqI40QaD6L9m/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 11) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/26n7aKFAZsBITlYqY/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 12) {var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwHDHsRDmzKODyU/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 13) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l1J9waPimzibCMsJG/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 14) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/3ohhwyZmEDqxFqHvO0/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    } else if (randomNumber === 15) {
        var embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/l1J9uPF7wfrtYEkve/giphy.gif")
        .setColor("#91489a")
        .setDescription("**"+user.username+" **, **"+message.author.username+"** acaba de te dar um beijo!")
        message.channel.sendMessage({embed})
    }
    bot.user.setActivity(message.guild.memberCount + " Minions! ❤")
}