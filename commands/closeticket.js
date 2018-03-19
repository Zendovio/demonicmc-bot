const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var tlog = message.guild.channels.find("name", "ticket-log");
  if (!message.member.roles.find("name", "Staff")) return message.channel.send("Sorry, you can't close a ticket please ask a staff to close it.");
    if (args[0]) {
      var tid = args[0];
      var tchan = message.guild.channels.find("name", `${tid}`);
      if (!tchan) return message.channel.send(":x: Given Ticket ID doesn't exist!");
      message.channel.send("Closing Ticket...");
      tchan.delete();
      message.channel.send("Ticket Closed!");
      var closetc1 = new Discord.RichEmbed()
      .setDescription("**Ticket Closed**")
      .setColor("#ed3434")
      .addField("Ticket Closed by:", `${message.author}`, true)
      .addField("Ticket-ID:", `${tchan}`, true);
      tlog.send(closetc1);
    } else {
        var channame = message.channel.name
        if (!channame.startsWith("ticket-")) return message.channel.send(":x:This is not a ticket channel!");
        if (!channame.startsWith("ticket-") && (channame.contains = "log")) return message.channel.send(":x:This is not a ticket channel!");
        var closetc2 = new Discord.RichEmbed()
          .setDescription("**Ticket Closed**")
          .setColor("#ed3434")
          .addField("Ticket Closed by:", `${message.author}`, true)
          .addField("Ticket-ID:", `${channame}`, true);
          tlog.send(closetc2);
  }
}

module.exports.help = {
  name: "closeticket"
}
