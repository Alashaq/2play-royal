client.on('message', message => {
const adminprefix = "#";
const devs = ['346045919072092161'];
    var command = message.content.split(" ")[0];
    if(command == adminprefix + 'bc') {
        var args = message.content.split(' ').slice(1).join(' ');
        if(message.author.bot) return;
        if(!args) return message.channel.send(`**:x: | Please write something to sumbit broadcast to all members**`).then(msg => msg.delete(5000));
       
        let bcSure = new Discord.RichEmbed()
        .setTitle(`**Are you sure to sumbit your broadcast to ( ** ${message.guild.memberCount} ** ) Members?**`)
        .setColor('RANDOM')
        .setDescription(`**\n:envelope: | ➥ Your Message : **\n\n${args}`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
       
        message.channel.send(bcSure).then(msg => {
            msg.react('✅').then(() => msg.react('❎'));
            message.delete();
           
           
            let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
            let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
           
            let sendBC = msg.createReactionCollector(yesEmoji);
            let dontSendBC = msg.createReactionCollector(noEmoji);
           
            sendBC.on('collect', r => {
                message.guild.members.forEach(member => {
                    member.send(args.replace(`[user]`, member)).catch();
                    if(message.attachments.first()){
                        member.sendFile(message.attachments.first().url).catch();
                    }
                })
                message.channel.send(`:timer: | **تم ارسأل الرسالة الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
                msg.delete();
            })
            dontSendBC.on('collect', r => {
                msg.delete();
                message.reply(':white_check_mark: | **تم الغاء ارسال رسالة البرودكاست بنجاح**').then(msg => msg.delete(5000));
            });
        })
    }
});

client.login(process.env.BOT_TOKEN);
