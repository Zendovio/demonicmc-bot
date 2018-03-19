const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.find("name", "Staff")) return message.channel.send(":x: You do not have the permission!");
    if (!args[0]) return message.channel.send(":x: Wrong Usage!");
      message.delete();
      message.channel.send(args.join(" "));
}

module.exports.help = {
  name: "say"
}
