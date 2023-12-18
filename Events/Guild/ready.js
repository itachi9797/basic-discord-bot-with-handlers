const client = require('../../index.js');
const { WebhookClient } = require('discord.js');
const config = require('../../config.json');

client.once('ready', async client => {

    await client.db.connect();
    console.log(`[READY] ${client.user.tag} is up and ready to go.`.bold)

    client.webhook = new WebhookClient({
        url: config.BotErrorWeb
    })
    
});