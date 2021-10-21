const Discord = require('discord.js')
const Intents = Discord.Intents
const dotenv = require('dotenv')
const manageData = require("./js/manageData.js");

dotenv.config()

const client = new Discord.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready',()=> {
    console.log('Ready !')
})

client.on('messageCreate',(msg)=>{
    if (msg.author.bot) return;
    msgContent = msg.content
	const args = msgContent.trim().split(" ");
    
    for (let i=0;i<args.length;i++){
        manageData.UpdateData(msg.author.id, args[i])
    }

})

client.login(process.env.TOKEN)