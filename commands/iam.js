const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  
                    message.delete()
                    var args = message.content.split(" ").slice(1).join(' ')
                    let role = message.guild.roles.find("name", args)
                var embed = new Discord.RichEmbed()
                        .setAuthor('| Erro!', message.author.avatarURL)
                        .setDescription("Esse cargo não existe!")
                        .setFooter("Executado por: " + message.author.tag, message.author.avatarURL)
                        .setTimestamp()
                        .setColor("#91489a")
                    if (!role) return message.channel.send({ embed }).then(message => message.delete(6000));
                    if(message.author.id === "398291844313776138") return message.guild.member(message.author).addRole(role);
                    if(message.author.id === "398291844313776138") return message.guild.member(message.author).addRole(role);
                    let member = message.guild.member(message.author).addRole(role);
                    var embed = new Discord.RichEmbed()
                        .setTimestamp()
                        .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
                        .setAuthor(message.author.tag, message.author.avatarURL)
                        .addField("Você ganhou um cargo!", 'Eu te dei o cargo: ' + args)
                        .setColor("#91489a")
                    message.channel.send({ embed }).then(message => message.delete(6000))


                    
}
