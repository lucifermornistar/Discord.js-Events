const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildCreate", async guild => { 

// Quando entrar em um servidor anúnciar em um canal
 client.channels.cache.get("ID do canal").send(`**Entrei no servidor ${guild.name}!**`)

});
