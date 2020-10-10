//This is the main file for the bot, written in discord.js. Don't worry, I haven't exposed the token since it's in a different file. If you want to hide your token when publishing just find a tutorial lol idk.
const { Discord, Client, MessageEmbed } = require('discord.js')
require('dotenv').config()
const prefix = process.env.PREFIX;

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

//Help Embed
 client.on('message', async (message) => {
  if(message.content === `${prefix}help`) {
  var embed = new MessageEmbed()
  .setColor('#0099ff')
  .setAuthor(message.author.tag, message.author.avatarURL())
	.setTitle('Beanie - Help')
  .setDescription('**General Commands:** \n Get Help **-** *help \n Github Link **-** *git \n **Random Commands:** \n Send An Image Of A Pool Of Beans **-** *bean \n Omegle Kid Meme **-** *omeglekid')
	.setFooter('Bot Made By Porbei#4444');
  message.channel.send(embed)
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

//YES
console.log("Loading...")

client.login(process.env.TOKEN);
