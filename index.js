const Discord = require('discord.js');
const config = require('../../config.json');
const fetch = require('node-fetch');



class cfxfinder {
    constructor(options = {}) {
        this.options = options;
    }


async find(msg) {
    if(this.inGame) {
        return;
    }

    this.inGame = true;
    const embed = new Discord.MessageEmbed()
        .setColor('ERROR')
        .setTitle('Fatal error in script, cant find cfx')
        .setDescription(this.gameBoardToString());

    if(this.options.timestamp) {
        embed.setTimestamp();
    }
    console.log(config.bot.token)
    msg.channel.send({ embeds: [embed] })
        await this.gameEmbedMessage.react('❌');
}
}

module.exports = cfxfinder;