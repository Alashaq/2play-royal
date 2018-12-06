const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async message => {
    
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("$$delete colors")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return
let role = message.guild.roles.find('name', '1');

role.delete()
}

});

client.login(process.env.BOT_TOKEN);
