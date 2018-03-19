const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.member.roles.find("name", "Staff")) return message.channel.send(":x: Staff Only!");
  if (!args[0]) return message.channel.send("Please include a question.");
  var question = args.join(" ");
  let pollEmbed = new Discord.RichEmbed()
  .setDescription(question)
  .setColor("#10995b");
  message.channel.send(pollEmbed).then(function (message) {
    message.react("✅")
    message.react("❌")
  });
}

module.exports.help = {
  name: "createpoll"
}
