const Discord = require('discord.js')
const client = new Discord.Client();

// const token = require('./token.json')

client.on('ready', () => {
    console.log('Thewsomeestgamerbot is now Online');
    client.user.setActivity('this bot was created by thewsomeestgamer', { type: 'PLAYING' });
});

client.on('message', async (message) => {
    if(message.author.bot) return;

    // let prefixes = ["!", ""];
    let prefix = "!"

    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).split(' ');
    // array = ["my", "dog", "is", "nice"]
    const command = args.shift().toLowerCase();

    if(command == 'hi') {
        return message.channel.send(':wave:');
    }


    if(command == 'partner') {
        return message.channel.send("This server doesn't have any partners yet please wait and see what partners we have next!")
    }

    if(command == 'youtube') {
        return message.channel.send('https://www.youtube.com/channel/UCnWjs3WqMz2vRKSGIDpcMgQ')
    }
    
    if(command == 'commands') {
        return message.channel.send('!commands !hello !partner !youtube')
        if(command == 'commands') {
            return message.channel.send('!commands !hello !partner !youtube')
        }
        if(command == 'ticket') {
            return message.channel.send('Msg thewsomeestgamer for more infoermation!')
            
            
        }
    }
});[
    
]

client.login(process.env.TOKEN);