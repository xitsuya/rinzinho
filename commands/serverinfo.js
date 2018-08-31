const Discord = require("discord.js")
const moment = require('moment')
exports.run = (bot, message, args) => {

        var parts = message.content.split(' ');
        let guild = message.guild;
        let channel = guild.channels.find("name", "rin-bot");
        const emojiList = message.guild.emojis.map(e => e.toString()).join(" ");
        var embed = new Discord.RichEmbed()

        .setAuthor('Informações de: ' + message.guild.name, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField('Nome do Servidor:', message.guild.name, true)
        .addField('Região do Servidor:', message.guild.region, true)
        .addField('Owner do Servidor:', message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator, true)
        .addField('Quantidade de Membros:', message.guild.memberCount, true)
        .addField('Criado Em:', moment(message.guild.createdAt).format('LL'), true)
        .addField('Numero de Cargos:', message.guild.roles.size, true)
        .addField("ID do Servidor:", message.guild.id, true)
        .addField("Numero de Canais:", message.guild.channels.size, true)
        .setTimestamp()
        .setFooter('Executado por: ' + message.author.tag, message.author.avatarURL)
        .setColor('#91489a')
        channel.send({ embed })
        var embed = new Discord.RichEmbed()
        .setAuthor(" Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
        .setDescription("Mandei as Informações do Servidor no canal #rin-bot")
        .setFooter("Executado Por: " + message.author.tag )
        .setTimestamp()
        .setColor("#91489a")
        message.channel.send({embed}).then(message => message.delete(5000))
        bot.user.setActivity(message.guild.memberCount + " Minions! ❤")
        
}