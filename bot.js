
// Extract the required classes from the discord.js module
const { Client, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();
const auth = require('./auth.json');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log(`Logado como ${client.user.tag}!`);
});

client.on('message', msg => {
  // If the message is "how to embed"
  if (msg.content === 'embede') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Seja Bem Vindo(a)')
      // Set the color of the embed
      .setColor(0x239B56)
      // Set the main content of the embed
      .setDescription('{Nome_d0_usuario}');
    // Send the embed to the same channel as the message
    msg.channel.send(embed);
  }
  if (msg.content === 'avat') {
  const myavatarEmbed = new RichEmbed()
  .setColor('0xDC143C')
  .setTitle('Seu Avatar...')
  .setImage(msg.author.avatarURL)	
  if (!msg.mentions.users.size) {
  return msg.channel.send(myavatarEmbed);
  }
        var user = msg.mentions.users.first();	
  const avatarEmbed = new RichEmbed()
  .setColor('0xDC143C')
  .setTitle(`Avatar de ${user.username}...`)
  .setImage(user.displayAvatarURL)
  msg.channel.send(avatarEmbed);
  }
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'bot-tests');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
channel.send(`Seja bem vindo(a), ${member}  ${member.user.displayAvatarURL}`);
});

client.login(auth.token);