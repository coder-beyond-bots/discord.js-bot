const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'put_your_prefix_here';

client.on('ready', () => {
console.log('ready!')
});
//easy ping command.
client.on('message', message => {
if(message.content === `${prefix}ping`) {
message.channel.send('pong!')
}
})

//medium ping command.
client.on('message', message => {
if(message.content === `${prefix}ping`) {
message.channel.send(`Pong! Time taken: ${client.ws.ping}ms.`)
}
})
//hard ping command.
client.on('message', message => {
if(message.content === `${prefix}ping`) {
let timeTaken = `${client.ws.ping}`
let reducedTime = `${Date.now() - message.createdTimestamp}`
message.channel.send(`Pong! :ping_pong:\nApi ping: ${timeTaken}\n Bot ping: ${reducedTime}`)
}
})

client.login(put_your_token_here)//go to discord.com/developers to get your bot token and create the new application.
