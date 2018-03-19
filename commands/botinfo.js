const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bIcon = bot.user.displayAvatarURL
    let bInfo = new Discord.RichEmbed()
    .setDescription("**Bot Information**")
    .setColor("#cc0c0f")
    .addField("Bot Name", bot.user.username, true)
    .addField("Bot Created On", bot.user.createdAt, true)
    .addField("Bot Author", "Zendovo#4334")
    .setThumbnail(bIcon);
    message.channel.send(bInfo);
}

module.exports.help = {
  name: "botinfo"
}
