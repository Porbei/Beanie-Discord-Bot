//This is the main file for the bot, written in discord.js. Don't worry, I haven't exposed the token since it's in a different file. If you want to hide your token when publishing just find a tutorial lol idk.

const { Client } = require('discord.js')
const Discord = require('discord.js')
require('dotenv').config()
const prefix = process.env.PREFIX;
const pagination = require('discord.js-pagination');
const client = new Client()

//Bot Status (cuz why not)
client.on('ready', () => {
    console.log("Bot online")
    client.user.setActivity(`over ${client.guilds.cache.size} servers | For help go to: https://discord.gg/7acbhYR` , { type: 'WATCHING' })
})

//Send Bean Image
client.on('message', async (message) => {
  if(message.content === `${prefix}bean`) {
  message.channel.send("I like your thinking, here you go: https://cdn.discordapp.com/attachments/722523115934187531/764215705846546502/Heinzbakedbeans.jpg")
}
})
 
//Github file post thingymabobarooni
client.on('message', async (message) => {
  if(message.content === `${prefix}git`) {
  message.channel.send("You want the source code? Well here you go then: https://github.com/Porbei/Beanie-Discord-Bot")
}
})

//Omegle Kid
client.on('message', async (message) => {
  if(message.content === `${prefix}omeglekid`) {
  message.channel.send("Um, sure. Here you go: https://cdn.discordapp.com/attachments/753721434441777172/764158537650667550/video0.mp4")
}
})
//get user's avatar

//Help command 
 client.on('message', async (message) => {
  if(message.content === `${prefix}help`) {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Beanie Bot Commands')
    .setURL('https://sites.google.com/view/beaniebot/home')
    .setDescription('**General Commands:** \n*kick - Kicks user pinged after a space following *kick (In progress currently) \n*ban - Bans user pinged after a space following *ban (In progress currently). \n*help - Sends an embed with all commands. \n**Random Commands:**\ngit - Sends a link to the Beanie Bot Github page.\n*bean - Sends an image of BEANS. \n*omeglekid - Sends a video in which a kid goes absolutely mental (recorded on Omegle).')
    .setFooter('Beanie Bot made by Porbei#4444 with assistance from GamingVerse 𝓓𝓮𝓿#6969')
message.channel.send(exampleEmbed)
}
})


/*
//kick command

client.on("message", (message) => {
  if (message.content.startsWith("*kick")) {
      var member = message.mentions.members.first();
      // Kick
      member.kick().then((member) => {
          // Success message
          message.channel.send(member.displayName + " " + "has been kicked.");
      }).catch(() => {
           // Fail message
          message.channel.send("Your permissions are insufficient.");
      });
  }
});

//ban command
client.on("message", (message) => {
  if (message.content.startsWith("*ban")) {
    var member = message.mentions.members.first();
    //ban
    member.ban().then((member) => {
      //Success message
      message.channel.send(member.displayName + " " + "has been banned.");
    }).catch(() => {
      //fail message
      message.channel.send("Your permissions are insufficient.");
    });
  }
})

//unban command
*/

//YES
console.log("Loading...")

client.login(process.env.TOKEN);
