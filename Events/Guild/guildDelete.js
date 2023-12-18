const client = require('../../index')
const { EmbedBuilder, Events, WebhookClient } = require('discord.js');
const config = require('../../config.json');

client.on(Events.GuildDelete, async (guild) => {
    const embed = new EmbedBuilder()
    .setColor(config.EmbedColor)
    .setAuthor({ name: `SERVER LEAVED!`, iconURL: guild.iconURL({ dynamic: true })})
    .setDescription(`**Name:** ${guild.name}
**ID:** ${guild.id}
**Members:** ${guild.memberCount + 1}
**Created At:** <t:${Math.round(guild.createdTimestamp/1000)}>
**joined At:** <t:${Math.round(guild.joinedTimestamp/1000)}>`)
    .setTimestamp()

    const web = new WebhookClient({
        url: config.GuildDeleteWeb
    })
    web?.send({ embeds: [embed] })  
});