# CfxFinder

I'm sure you have heard of fivem before, if you haven't then why the hell are you here, this bot can show you the ip address and a bunch of info only using the cfx-ip.

## Installation

```bash
npm install cfxfinder
```

## Features
- Easy to use
- Clean and focused
- Actively maintained

## Example
```js
const cfxfinder = require('cfxfinder');
const Discord = require('discord.js');


const config = {
    token: 'TOKEN',
    prefix: 't!'
}

client.on('ready', () => {
    console.log('Ready!');
    client.user.setActivity(`${config.prefix}help`);
});

client.on('message', async message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'test') {
        return message.channel.send('Test command works.');
    } else if(command === 'cfxfinder' || command === 'snakegame') {
        return await cfxfinder.find(args[0]);
    } else if(command === 'help' || command === 'h') {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .addFields(
                { name: 'test', value: 'Check the command handler', inline: true },
                { name: 'cfx', value: 'Use the cfx command', inline: true },
                { name: 'help', value: 'Show this list', inline: true }
            )
            .setColor('RANDOM')
            .setTimestamp();

        return message.channel.send({ embeds: [embed] });
    }
});

client.login(config.token);
```

## In Action
![1](/images/1.PNG)

## To-Do
- Optimizations and more optimizations
- Rewrite the whole thing in TypeScript
- Add JSDocs for easier development
- Add more information to the cfxfinder

## Authors
* **[Magni](https://github.com/lolmynamefg)** - *Creator*# cfxfinder 
