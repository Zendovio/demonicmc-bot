const Discord = require('discord.js');
var randomstring = require("randomstring");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {

  message.channel.send("Generating Ticket ID...");
    var uname = message.author.username;
    var uid = message.author.id;
    var randomid = randomstring.generate({  length: 6,  charset: 'abcdefghijklmnopqrstuvwxyz'});
    var tid = `ticket-${randomid}`;
    var sid = message.guild.roles.find("name", "Staff");
    var tcexists = message.guild.channels.find("name", tid);
    if (tcexists) return message.channel.send("Please execute the command again, the generated ID exists already");
    message.channel.send("Creating Ticket Channel...");
    var ticketlog = message.guild.channels.find("name", "ticket-log");
    if (!ticketlog) return message.channel.send("Error!, no `ticket-log` channel! Contact a server admin.");
    if (!args[0]) {
    message.guild.createChannel(`${tid}`, "text", [{
      id: uid,
      allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
    },
    {
      id: sid,
      allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
    },
    {
      id: message.guild.defaultRole,
      deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
    }]);
    message.channel.send("Ticket Created!");
    var createdticketEmbed = new Discord.RichEmbed()
      .setDescription("**Ticket Created**")
      .setColor("#3def15")
      .addField("Created by:", `${message.author}`, true)
      .addField("Ticket-ID:", `${tid}`, true)
      .setFooter(`User ID: ${uid}`);
    ticketlog.send(createdticketEmbed);
    // var createdticket = message.guild.channels.find("name", `${tid}`);
    // if (!createdticket) return;
    // createdticket.send({embed: createdticketEmbed});
  } else {
    if (!message.member.roles.find("name", "Staff")) return message.channel.send("Sorry, you can't create a ticket for someone else.");
    var auid = args[0];
    message.guild.createChannel(`${tid}`, "text", [{
      id: uid,
      allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
    },
    {
      id: sid,
      allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
    },
    {
      id: message.guild.defaultRole,
      deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
    },
    {
      id: auid,
      allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
    }]);
    message.channel.send("Ticket Created!");
    var createdticketEmbed = new Discord.RichEmbed()
      .setDescription("**Ticket Created**")
      .setColor("#3def15")
      .addField("Created by:", `${message.author}`, true)
      .addField("Created for:", `<@${auid}>`, true)
      .addField("Ticket-ID:", `${tid}`, true)
      .setFooter(`User ID: ${uid}`);
    ticketlog.send(createdticketEmbed);
  }
}
// .addField("Created at:", `${message.guild.createdticket.createdAt}`)
module.exports.help = {
  name: "newticket"
}
