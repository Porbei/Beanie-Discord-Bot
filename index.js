//This is the main file for the bot, written in discord.js. Don't worry, I haven't exposed the token since it's in a different file. If you want to hide your token when publishing just find a tutorial lol idk.
const { Discord, Client, MessageEmbed } = require('discord.js')
require('dotenv').config()
const prefix = process.env.PREFIX;

const client = new Client()

//Bot Status (cuz why not)
client.on('ready', () => {
    console.log("Bot online")
    client.user.setActivity(`over ${client.guilds.cache.size} servers` , { type: 'WATCHING' })
})

//Send Bean Image
client.on('message', async (message) => {
  if(message.content === `${prefix}bean`) {
  message.channel.send("https://cdn.discordapp.com/attachments/722523115934187531/764215705846546502/Heinzbakedbeans.jpg")
}
})

//Help Embed
 client.on('message', async (message) => {
  if(message.content === `${prefix}help`) {
  var embed = new MessageEmbed()
  .setColor('#0099ff')
  .setAuthor(message.author.tag, message.author.avatarURL())
	.setTitle('Beanie - Help')
  .setDescription('**General Commands:** \n Get help **-** *help \n Github Link **-** *git \n **Random Commands:** \n Send an image of a bean **-** *bean')
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

client.login(process.env.TOKEN);
