const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sugg = args.join(" ");
  var suggCh = message.guild.channels.find("name", "suggestions");
  if (!args[0]) return message.channel.send(":x: Wrong usage!");
  if (!suggCh) return message.channel.send(":x: Please ask a administrator of the server to make a `suggestions` channel!.")
  let suggEmbed = new Discord.RichEmbed()
  .setDescription(`**Suggested by:** ${message.author}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor("#ffffff")
  .addField("Suggestion", sugg)
  .setFooter(`Suggestor ID: ${message.author.id}`);
  suggCh.send(suggEmbed).then(function (message) {
    message.react("👍")
    message.react("👎")
    });
}

module.exports.help = {
  name: "suggest"
}
