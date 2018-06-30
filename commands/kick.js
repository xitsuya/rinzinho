const Discord = require("discord.js")

exports.run = (bot, message, args) => {

​

​

    if (!message.member.hasPermission("KICK_MEMBERS")) return;

    let guild = message.guild;

    var args = message.content.split(" ").slice(1).join(' ')

    let reason = args.split(" ").slice(1).join(' ');

    let user = message.mentions.users.first();

    let channel = guild.channels.find("name", "ban-log");

​

        var embed = new Discord.RichEmbed()

        .setAuthor("| Erro!", message.author.avatarURL)

        .setTimestamp()

        .setDescription("Você precisa mencionar um membro para eu dar o kick!")

        .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")

        .setColor("#91489a")

       if (message.mentions.users.size < 1) return message.channel.send({ embed }).then(message => message.delete(5000));

​

​

    var embed = new Discord.RichEmbed()

        .setAuthor("| Erro!", message.author.avatarURL)

        .setTimestamp()

        .addField("Você precisa dizer um motivo para esse kick!", "`+kick @user reason`")

        .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")

        .setColor("#91489a")

    if (reason.length < 1) return message.channel.send({ embed }).then(message => message.delete(5000));
   var embed = new Discord.RichEmbed()
        .setAuthor("| Erro!", message.author.avatarURL)
        .setTimestamp()
        .setDescription("Eu não posso dar kick nesse membro!")
        .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
        .setColor("#91489a")
    if (!message.guild.member(user).kickable) return message.channel.send({ embed }).then(message => message.delete(5000));


    let member = message.guild.member(user).kick();
    var embed = new Discord.RichEmbed()
        .setAuthor("Kick | " + user.tag)
        .setTimestamp()
        .addField('Membro:', `${user.username}#` + user.discriminator, true)
        .addField('Staff:', `${message.author.username}`, true)
        .addField('Motivo:', reason, true)
        .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
            channel.send({ embed });

            bot.user.setActivity(message.guild.memberCount + " Membros! ❤")
    