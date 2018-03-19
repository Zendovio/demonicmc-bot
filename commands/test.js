const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return;
  var au = args[0];
  message.channel.send(au)
  var auid = message.guilds.members.find("id", `${au}`);
  message.channel.send(`${auid}`);
}

module.exports.help = {
  name: "test"
}
