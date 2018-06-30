const Discord = require("discord.js")
exports.run = (bot, message, args) => {
       
        let parts = message.content.split(' ');
        let toDeleteCount = parseInt(parts[1]);
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if (message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) {
                if (parts.length > 1 && parts.length < 3) {
                    if (isNaN(toDeleteCount) === false) {
                        if (toDeleteCount >= 1) {
                            message.channel.bulkDelete(toDeleteCount + 1, true)
                            let embed = new Discord.RichEmbed()
                                .setTitle("Eu apaguei " + toDeleteCount + " mensagens desse canal!")
                                .setAuthor(message.author.tag, message.author.avatarURL)
                                .setColor("#91489a")
                                .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
                                .setTimestamp()
                            message.channel.sendMessage({ embed }).then(message => {
                                setTimeout(() => { message.delete() }, 5000)
                            })
                        }
                    } else {  let embed = new Discord.RichEmbed()
                            .setTitle("Não é assim que se usa esse comando!")
                            .setDescription("Uso correto : `+clear 1`")
                            .setAuthor(message.author.tag, message.author.avatarURL)
                            .setColor("#91489a")
                            .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/366922505480568852/8bc60c31c633300d19976f5a353784a6.png?size=2048")
                            .setTimestamp()
                        message.channel.send({ embed }).then(message => {
                            setTimeout(() => { message.delete() }, 5000);
                            bot.user.setActivity(message.guild.memberCount + " Membros! ❤")
                        })
                    }
                }
            }
        } 
    }