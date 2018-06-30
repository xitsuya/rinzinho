const Discord = require("discord.js")
const moment = require('moment')
exports.run = (bot, message, args) => {
        
let parts = message.content.split(' ');
let guild = message.guild;
let user = message.mentions.users.first();
let xd = guild.channels.find("name", "rin-bot");
let xp = guild.channels.find("name", "geral");
var embed = new Discord.RichEmbed()
.setAuthor('As Suas Informações:', message.author.avatarURL)
.addField('Seu Username', message.author.username, true)
.addField('Seu Apelido:', message.guild.members.get(message.author.id).displayName, true)
.addField('ID', message.author.id, true)
.addField('Status', message.author.presence.status, true)
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.addField('Dia em que entrou no servidor', moment(message.guild.member(message.author).joinedAt).format('LL'), true)
.addField('Quando você criou a sua conta:', moment(message.author.createdAt).format('LL'), true)
.addField('Seus Cargos:', message.guild.members.get(message.author.id).roles.array().join(' | '))
.setColor("#91489a")
.setFooter("Comando Executado Por: " + message.author.tag, message.author.avatarURL)
if (message.mentions.users.size < 1) return xd.send({ embed }).then(message => {
    var embed = new Discord.RichEmbed()
    .setAuthor("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
    .setDescription("Mandei suas informações no canal <#366978821402001409>")
    .setTimestamp()
    .setColor("#91489a")

    message.channel.send(embed).then(message => message.delete(5000))})





    var embed = new Discord.RichEmbed()
    .setAuthor("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
    .setDescription("Mandei as informações do usuário no canal <#366978821402001409>")
    .setFooter("Executado Por:  " + message.author.tag )
    .setTimestamp()
    .setColor("#91489a")
    message.channel.send({embed}).then(message => message.delete(5000))

var embed = new Discord.RichEmbed()
if (message.mentions.users.size < 1) return xd.send({ embed }).then(message => {
    var embed = new Discord.RichEmbed()
    .setAuthor("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
    .setDescription("Mandei suas informações no canal <#366978821402001409>")
    .setTimestamp()
    .setColor("#91489a")

    message.channel.send(embed).then(message => message.delete(5000))})





    var embed = new Discord.RichEmbed()
    .setAuthor("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
    .setDescription("Mandei as informações do usuário no canal <#366978821402001409>")
    .setFooter("Executado Por:  " + message.author.tag )
    .setTimestamp()
    .setColor("#91489a")
    message.channel.send({embed}).then(message => message.delete(5000))

var embed = new Discord.RichEmbed()
    .setAuthor('A Info do Usuário Mencionado:', user.avatarURL)
    .addField('Username do Membro', user.username, true)
    .addField('Apelido do Membro:', message.guild.members.get(user.id).displayName, true)
    .addField('ID', user.id, true)
    .addField('Status', user.presence.status, true)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    .addField('Dia em que entrou no servidor', moment(message.guild.member(user).joinedAt).format('LL'), true)
    .addField('Criou a conta em:', moment(user.createdAt).format('LL'), true)
    .addField('Cargos do Membro:', message.guild.members.get(user.id).roles.array().join(' | '))
    .setColor("#91489a")
    .setFooter("Comando Executado Por: " + message.author.tag, message.author.avatarURL)
    xd.send({ embed })

   bot.user.setActivity(message.guild.memberCount + " Membros! ❤")

}