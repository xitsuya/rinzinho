const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require ("chalk");
const fs = require("fs");
const warning = chalk.keyword('red');
const config = require("./config.json");
const http = require('http');
const express = require('express');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
   client.prefix = config.prefix;

client.on("ready", () => {
console.log("Im Online ~ ♥")
client.user.setActivity("Meu prefixo é \"+\"")
});

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  if(newMessage.author.bot) return;
var embed = new Discord.RichEmbed()
.setAuthor(newMessage.author.tag, newMessage.author.avatarURL)
.setDescription("**📝 | " + newMessage.author.tag +" | Editou uma mensagem no canal "+ newMessage.channel + "**" + "\n" + "```" + "\n" + oldMessage.content + " ```" + "\n ```" + newMessage.content + "" + "```")
.setTimestamp()
.setFooter("ID: "+ newMessage.author.id)
.setColor("#91489a")
let canal = newMessage.guild.channels.find("name", "rin-log")
if(!canal) return;
canal.send({embed})

client.user.setActivity(newMessage.guild.memberCount + " Minions! ~ ❤")
})

client.on("guildCreate", (guild)=> {
  guild.fetchInvites().then(invite => {
  console.log(warning("Ei eu entrei no servidor " + guild.name + " O codigo do convite é https//:discord.gg:/"+ invite.first().code));
  
  })
});

client.on("guildCreate", (guild)=> {
  guild.fetchInvites().then(invite => {
  console.log(warning("Ei eu entrei no servidor : " + guild.name));
  
});
    
})

client.on("messageDelete", (message) =>{
  if(message.author.bot) return;
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription("** 🗑 | " + message.author.tag + " | Apagou uma mensagem no canal "+ message.channel + "**" + "\n" + "```"+message.content+"```")
  .setTimestamp()
  .setFooter("ID: "+ message.author.id)
  .setColor("#91489a")
  let canal = message.guild.channels.find("name", "rin-log")
  if(!canal) return;
  canal.send({embed})

  client.user.setActivity(message.guild.memberCount + " Minions! ~ ❤")
})
client.on('userUpdate',(oUser, nUser) => {
    client.guilds.forEach((guild) => {
      if (guild.members.has(nUser.id) && oUser.avatarURL !== nUser.avatarURL) {
        var embed = new Discord.RichEmbed()
        .setColor("#91489a")
        .setFooter("ID: " + nUser.id ) 
        .setTimestamp()
        .setAuthor(nUser.tag, oUser.avatarURL)
        .setDescription(":frame_photo:" + nUser + " **alterou o avatar**")
        .setThumbnail(nUser.avatarURL)
        let canal = guild.channels.find("name", "rin-log")
        if(!canal) return;
        canal.send({embed});
      
      }
      if (guild.members.has(nUser.id) && oUser.username !== nUser.username) {
        var embed = new Discord.RichEmbed()
        .setColor("#91489a")
        .setFooter("ID: " + nUser.id )
        .setTimestamp()
        .setAuthor(oUser.tag + " alterou o nome de usuário", nUser.avatarURL)
        .setDescription("```"+ oUser.username + "```\n```"+nUser.username+"```")
        .setThumbnail(nUser.avatarURL)
        let canal = guild.channels.find("name", "rin-log")
        if(!canal) return;
        canal.send({embed});
        
      }
    
    });
  });

client.on("message", message => {

if(message.content.includes("https://discord")){
  if(message.content === "https://discord.gg/RUc4vYz") return;
  message.delete()
  }else  if(message.channel.id === "396139789478395904"){
  message.delete()
}
})


const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);
		
    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  if(config.speed < 10000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});

client.login(config.token);