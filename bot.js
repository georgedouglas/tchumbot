
const { Client, RichEmbed } = require('discord.js');

const client = new Client();
const auth = require('./auth.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'embed') {
    const embed = new RichEmbed()
      .setTitle('Embed Test')
      .setColor(0x239B56)
      .setDescription('Embed Description');
    msg.channel.send(embed);
  }
  if (msg.content === 'avatar') {
  const myavatarEmbed = new RichEmbed()
  .setColor('0xDC143C')
  .setTitle('Your Avatar...')
  .setImage(msg.author.avatarURL)	
  if (!msg.mentions.users.size) {
  return msg.channel.send(myavatarEmbed);
  }
        var user = msg.mentions.users.first();	
  const avatarEmbed = new RichEmbed()
  .setColor('0xDC143C')
  .setTitle(`${user.username}'s avatar...`)
  .setImage(user.displayAvatarURL)
  msg.channel.send(avatarEmbed);
  }
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'bot-tests');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
channel.send(`Welcome to the server, ${member}  ${member.user.displayAvatarURL}`);
});

client.login(auth.token);
