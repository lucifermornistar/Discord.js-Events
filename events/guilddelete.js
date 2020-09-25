const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildDelete", async guild => {

// Quando sair de um servidor
 client.channels.cache.get("ID do canal").send(`**Sai do servidor ${guild.name}!**`)
});
