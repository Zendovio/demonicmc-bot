const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
    let help = new Discord.RichEmbed()
    .setDescription(`**Help Menu**\nNote: Do not include "<>" or "[]" in the commands.\n(Example: ${prefix}suggest Add a emoji)`)
    .addField("Basics:", `**Prefix**   | ${prefix}\n**Usage**   | ${prefix}<command>`)
    .addField("Commands:", "**botinfo**   | Shows bot info\n**help**   | Shows this menu\n")
    .addField("Suggestion:", "**suggest <suggestion>**   | Suggest something to be added")
    .addField("Tickets:", "**newticket**   | Creates a new ticket.\n**newticket <User-ID*>**   | Creates a ticket for someone else. `Staff Only`\n**closeticket [id]**   | Closes given id ticket, if not given closes the ticket you are typing in. `Staff Only`")
    .addField("Polls:", "**createpoll**   | Starts a poll `Staff Only`")
    // .addField("mcserver", "Shows our MC server status*")
    .setFooter("<> = Required | [] = optional | *Don't mention the user put their id!")
    .setColor("#2aedcf");
    message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
