const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {

// se o bot ligar mandar mensagem
client.channels.cache.get("ID do canal").send(`Lorem ipsum dolor sit amet`)

// setar Status
client.user.setStatus(`dnd`) // dnd, idle, online

// Setar atividade
client.user.setActivity(`Lorem ipsum`, {
        type: "WATCHING" //WATCHING, LISTENING, PLAYING
});

// Mandar no log se ele ligar
console.log("lorem ipsum")

});
