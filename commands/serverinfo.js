const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let sIcon = message.guild.iconURL
      let sInfo = new Discord.RichEmbed()
      .setDescription("**Server Information**")
      .setColor("#1372ad")
      .setThumbnail(sIcon)
      .addField("Server Name", message.guild.name)
      .addField("Server Created On", message.guild.createdAt)
      .addField("Total Members", message.guild.memberCount)
      message.channel.send(sInfo);
}

module.exports.help = {
  name: "serverinfo"
}
