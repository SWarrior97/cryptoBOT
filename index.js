require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.DISCORD_TOKEN;
const message = require('./helpers/helper');
const comand = require('./helpers/comand');

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message',async msg => {
    // msg.reply('pong');
    const message = await comand.getMessage(msg.content) || null

    if(message){
        const response = message
        msg.channel.send(message);
    }
});