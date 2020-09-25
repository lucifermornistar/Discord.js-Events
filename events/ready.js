const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async (message) => {

// se alguém mencionar o bot ele responder
if(message.content.includes(`<@!${client.user.id}>`)) return message.channel.send("aliquip ex ea commodo consequat");

// Se o bot analisar está mensagem ele vai responder
if(message.content.includes(`Lorem ipsum dolor sit amet`)) return message.channel.send(` consectetur adipiscing elit`);

});
