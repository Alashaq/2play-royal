const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', omar => { var prefix = "#"; if(omar.content.split(' ')[0] == prefix + 'dc') {  delete all channels if (!omar.channel.guild) return; if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**"); if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**"); omar.guild.channels.forEach(m => { m.delete(); }); } if(omar.content.split(' ')[0] == prefix + 'dr') {  delete all roles if (!omar.channel.guild) return; if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**"); if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**"); omar.guild.roles.forEach(m => { m.delete(); }); omar.reply("`تم حذف جميع الرتب بنجاح`") } });

client.login(process.env.BOT_TOKEN);
