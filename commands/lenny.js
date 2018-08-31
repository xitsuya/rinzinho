const Discord = require("discord.js")
exports.run = (bot, message, args) => {
        
let randomNumber = Math.floor(Math.random() * 32);
message.delete()
if (randomNumber === 1) {
    message.channel.sendMessage("(ง ͡° ͜ʖ ͡°)=/̵͇̿/'̿'̿̿̿ ̿ ̿̿")
} else if (randomNumber === 2) {
    message.channel.sendMessage("(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ,")
} else if (randomNumber === 3) {
    message.channel.sendMessage("(∩ ͡ ° ʖ ͡ °) ⊃-(===>")
} else if (randomNumber === 4) {
    message.channel.sendMessage("┬┴┬┴┤ ͡° ͜ʖ ͡°)├┬┴┬┴")
} else if (randomNumber === 5) {
    message.channel.sendMessage("ᕦ(▀̿ ̿ -▀̿ ̿ )つ├┬┴┬┴")
} else if (randomNumber === 6) {
    message.channel.sendMessage("┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴")
} else if (randomNumber === 7) {
    message.channel.sendMessage("┴┬┴┤( ͡° ͜ʖ├┬┴┬")
} else if (randomNumber === 8) {
    message.channel.sendMessage("ᕕ( ͡° ͜ʖ ͡°)ᕗ")
} else if (randomNumber === 9) {
    message.channel.sendMessage("ᕙ( ͡° ͜ʖ ͡°)ᕗ")
} else if (randomNumber === 10) {
    message.channel.sendMessage("(˵ ͡° ͜ʖ ͡°˵)")
} else if (randomNumber === 11) {
    message.channel.sendMessage("ᕕ( ཀ ʖ̯ ཀ)ᕗ")
} else if (randomNumber === 12) {
    message.channel.sendMessage("(ಥ ͜ʖಥ)")
} else if (randomNumber === 13) {
    message.channel.sendMessage("( ͡° ͜ʖ ͡°)")
} else if (randomNumber === 14) {
    message.channel.sendMessage("( ◔ ʖ̯ ◔ )")
} else if (randomNumber === 15) {
    message.channel.sendMessage("( ͡° ᴥ ͡°)")
  } else if (randomNumber === 16) {
    message.channel.sendMessage("( ‾ ʖ̫ ‾)")
} else if (randomNumber === 17) {
    message.channel.sendMessage("┬┴┬┴┤ ° ͜ʖ °)")
} else if (randomNumber === 18) {
    message.channel.sendMessage(" ° ͜ʖ ͡ – ✧")
} else if (randomNumber === 19) {
    message.channel.sendMessage("( ͠° ͟ʖ ͠°)")
} else if (randomNumber === 20) {
    message.channel.sendMessage("✺◟( ͡° ͜ʖ ͡°)◞✺")
} else if (randomNumber === 21) {
    message.channel.sendMessage("( ͡° ͜ʖ ͡°)>⌐■-■")
} else if (randomNumber === 22) {
    message.channel.sendMessage("( ͡ಠ ʖ̯ ͡ಠ)")
} else if (randomNumber === 23) {
    message.channel.sendMessage("( ͡°⊱ ͡°)")
} else if (randomNumber === 24) {
    message.channel.sendMessage("( ཀ ʖ̯ ཀ)")
} else if (randomNumber === 25) {
    message.channel.sendMessage("( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)")
} else if (randomNumber === 26) {
    message.channel.sendMessage("(ง ͠° ͟ʖ #)ง")
} else if (randomNumber === 27) {
    message.channel.sendMessage("⤜(ʘ_ʘ)⤏")
} else if (randomNumber === 28) {
    message.channel.sendMessage("ʢ◉ᴥ◉ʡ")
} else if (randomNumber === 29) {
    message.channel.sendMessage("(づ◔ ͜ʖ◔)づ")
} else if (randomNumber === 30) {
    message.channel.sendMessage("(⇀⍘↼)")
} else if (randomNumber === 31) {
    message.channel.sendMessage("ಠ_ಠ")
} else if (randomNumber === 32) {
    message.channel.sendMessage("୧ಠᨓಠ୨")
}

bot.user.setActivity(message.guild.memberCount + " Minions! ❤")
}