require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.DISCORD_TOKEN;
const {getMessage} = require('./helpers/command')
const {getUserFromMention} = require('./helpers/helper')

bot.login(TOKEN);


const fetchUser = async id => bot.users.fetch(id)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});


bot.on('message',async msg => {
    const message = await getMessage(msg.content) || null
    // console.log(JSON.stringify(msg.author))
    // const asd = getUserFromMention(msg.content)
    if(message){
        msg.channel.send(message);
    }
});