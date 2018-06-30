const Discord = require("discord.js")
    exports.run = (bot, message, args) => {
       
                let guild = message.guild;
               var args = message.content.split(" ").slice(1).join(' ')
               let reason = args.split(" ").slice(1).join(' ');
               let user = message.mentions.users.first(); 
                var embed = new Discord.RichEmbed()

                   .setAuthor("| Erro!", message.author.avatarURL)
                   .setTimestamp()
                   .setDescription("Você nao tem permissão para executar esse comando!")
                   .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048")
                   .setColor("#91489a")
               if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed}).then(message =>message.delete(5000));
              

               var embed = new Discord.RichEmbed()
                   .setAuthor("| Erro!", message.author.avatarURL)
                   .setTimestamp()
                   .setDescription("Você precisa mencionar alguém para o ban ser aplicado!")
                   .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048")
                   .setColor("#91489a")
               if (message.mentions.users.size < 1) return message.channel.send({ embed }).then(message => message.delete(5000)); var embed = new Discord.RichEmbed()
                   .setAuthor("| Erro!", message.author.avatarURL)
                   .setTimestamp()
                   .setDescription("Não posso banir esse membro!")
                   .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048")
                   .setColor("#91489a")
               if (!message.guild.member(user).bannable) return message.channel.send({ embed }).then(message => message.delete(5000));


               var embed = new Discord.RichEmbed()
                   .setAuthor("Error Message", message.author.avatarURL)
                   .setTimestamp()
                   .setDescription("Você precisa dizer um motivo para o ban!")
                   .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048")
                   .setColor("#91489a")
               if (reason.length < 1) return message.channel.send({ embed }).then(message => message.delete(5000));
              

              
               let member = message.guild.member(user).ban(0)
               var embed = new Discord.RichEmbed()
                   .setAuthor("Ban | " + user.username + '#' + user.discriminator)
                   .setTimestamp()
                   .addField('Membro:', `${user.username}#` + user.discriminator, true)
                   .addField('Staff:', `${message.author.username}`, true)
                   .addField('Motivo:', reason, true)
                   .setFooter("Rin-Bot", "https://cdn.discordapp.com/avatars/401995937318305793/92e363825d98c2595125a2669cf45904.png?size=2048")
               let channel = guild.channels.find("name", "ban-log");
               if (!channel) return;
               channel.send({ embed });
               bot.user.setActivity(message.guild.memberCount + " Membros! ❤")
    }