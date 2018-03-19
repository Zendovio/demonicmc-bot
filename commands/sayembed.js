const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.find("name", "Staff")) return message.channel.send(":x: You do not have the permission!");
    if (!args[0]) return message.channel.send(":x: Wrong Usage!");
      message.delete();
      let sayEmbed = new Discord.RichEmbed()
      .setDescription(args.join(" "))
      .setColor("#fff000");
      message.channel.send(sayEmbed);
}
module.exports.help = {
  name: "sayembed"
}
