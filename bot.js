const Discord = require("discord.js");
 
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "MESSAGE_CONTENT"],
    partials: ["CHANNEL", "MESSAGE"]
});
 
const token = ("MTIwMzg4NjQ1MTUyNDM3ODY2NA.GD-tnE.9Me9yJ0m43e7StHj2sB5KCcfWlbqppri4vmvlk") // your bot token here
 
client.on('ready', async () => {
    console.log(`Client has been initiated! ${client.user.username}`)
});
 

 
client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === "dima dima widad") {
      message.reply("w ga3 jrad wlad 9hab hh ");
  }
});





















client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === "La") {
      message.reply(" 7wak 3bdla ");
  }
});

client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === "la") {
      message.reply(" 7wak 3bdla ");
  }
});


client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === "oui") {
      message.reply("ydk fl 9lawi");
  }
});


client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === "zbi") {
      message.reply("fkrk");
  }
});


client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === "chkon") {
      message.reply("Li 7wak");
  }
});








client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'goat') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://www.icegif.com/wp-content/uploads/2022/12/icegif-1080.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('lm9ewd')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});





client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'goodnight') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://img1.picmix.com/output/pic/normal/7/9/0/2/4602097_99945.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('hh')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});




client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'nizar') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1204458597359030272/IMB_UJmaRh.gif?ex=65d4ce7b&is=65c2597b&hm=74e819946b9b2b058d3250c486b21b8638e29592da729855adc0bff2ebb85955&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('hh')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});





client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'a77') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1204458783858753646/IMB_bPalVZ.gif?ex=65d4cea7&is=65c259a7&hm=97d2e4b39b7c5790bf9725d713856bd4cdc4a2997f940ce76608a730509763bd&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('hh')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});



client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'alae') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1204458900188037180/IMB_1E58re.gif?ex=65d4cec3&is=65c259c3&hm=f8a63e2a5a138548043ac0d4b741cbda7480711eeedd018067031a1f78a61481&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('hahowa')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});



client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'omar') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://media.discordapp.net/attachments/1091911234267390085/1204455421134381136/image0.gif?ex=65d4cb86&is=65c25686&hm=90937555cc6f235ab06c7a118d3b8aee3e9165515c865abbc5f78a73a0cf2a75';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('hahowa')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});




client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'zwaml') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1204460568384380938/D4F32E1F-5683-4867-84B3-DC9CFD3AE988.gif?ex=65d4d051&is=65c25b51&hm=fc9519a71e4758c641fd339dfdf121960cc68aba2e158fc980957eff14812716&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('a rfed')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});











client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === '3bas') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1206016961721409586/810B31D6-6D48-4712-98C3-F8FA9996969B.gif?ex=65da79d2&is=65c804d2&hm=bc0ab12a5a51e1facc9788f30aa26e7b392d9f59cc0235723d27dbb4a036055a&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('hahowa')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});











client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'im confused') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1206016961721409586/810B31D6-6D48-4712-98C3-F8FA9996969B.gif?ex=65da79d2&is=65c804d2&hm=bc0ab12a5a51e1facc9788f30aa26e7b392d9f59cc0235723d27dbb4a036055a&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('hh')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});




client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'iblis') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://i.gifer.com/Jn7I.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('mal mk')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});








client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'ibliss') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://i.gifer.com/Jn7I.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('mal mk')
      .setImage(photoURL)
      .setColor('#FF0000'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});









client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'ibliss') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://i.gifer.com/Jn7I.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('mal mk')
      .setImage(photoURL)
      .setColor('#FF0000'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});








client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'rip') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1204459489009336320/51B55C25-F8AA-4E4D-A381-1A41AB719BAA.gif?ex=65d4cf4f&is=65c25a4f&hm=b286c06ac36e20ba99b13366021104f5fb1a651a802d77726c919fdc6459157e&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('Amin')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});








client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'wlad 9hab') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1204460568384380938/D4F32E1F-5683-4867-84B3-DC9CFD3AE988.gif?ex=65d4d051&is=65c25b51&hm=fc9519a71e4758c641fd339dfdf121960cc68aba2e158fc980957eff14812716&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('A rfedd ')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});






client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'wlad 97ab') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1204460568384380938/D4F32E1F-5683-4867-84B3-DC9CFD3AE988.gif?ex=65d4d051&is=65c25b51&hm=fc9519a71e4758c641fd339dfdf121960cc68aba2e158fc980957eff14812716&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('A rfedd ')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});



client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'aji') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.discordapp.com/attachments/1091911234267390085/1204463122921033748/29BE9EB5-4F99-436B-A308-EB539A0C08ED.gif?ex=65d4d2b2&is=65c25db2&hm=c0c4f7d5e68ba02f9fbb449de99e1973918a554c34bd8d9312b43a462f99851f&';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('nn hh')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});






client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'ajiw') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://i.pinimg.com/originals/d6/9b/a5/d69ba5e7656e2083d6fceffd4a2416d5.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('nn hh')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});




client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'ronaldo') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://media1.giphy.com/media/gkFPLRwoljl8iAUhdF/giphy.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('Bghiti t9sd had lbkay ?')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});




client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'cristiano') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://media1.giphy.com/media/gkFPLRwoljl8iAUhdF/giphy.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('Bghiti t9sd had lbkay ?')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});






client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'cr7') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://media1.giphy.com/media/gkFPLRwoljl8iAUhdF/giphy.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('Bghiti t9sd had lbkay ?')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});









client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'malk azbi') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://cdn.vox-cdn.com/thumbor/EaUuzIdnUGXAs_LokdLgtdrJZCY=/0x0:420x314/1400x1050/filters:focal(136x115:202x181):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/55279403/tenor.0.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('nari ach gal lih ')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});







client.on('message', (message) => {
  // Check if the message author is a bot to avoid potential loops
  if (message.author.bot) return;

  // Check if the message content is what you're looking for
  if (message.content.toLowerCase() === 'zaml') {
    // Replace 'your_image_url_here' with the URL of your image or the path if it's local
    const photoURL = 'https://gifdb.com/images/high/gta-guy-hands-on-head-0wad6syv116dggy5.gif';

    // Create an embed with the image
    const embed = new Discord.MessageEmbed()
      .setTitle('yalatif ach gal lih')
      .setImage(photoURL)
      .setColor('#3498db'); // You can customize the color

    // Send the embed as a reply
    message.reply({ embeds: [embed] });
  }
});












// Replace 'badword' with the specific word you want to monitor
const monitoredWord = 'hala madrid';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore messages from bots

  // Check if the message contains the monitored word
  if (message.content.toLowerCase().includes(monitoredWord)) {
    // Kick the user who said the monitored word
    const memberToKick = message.guild.members.cache.get(message.author.id);

    if (memberToKick) {
      // Send a message explaining the kick reason with a GIF
      const kickReason = ` Visca Barca azbi.`;
      const kickEmbed = new Discord.MessageEmbed()
        .setTitle(`Kicked user: ${message.author.tag}`)
        .setDescription(`Hak lban lwaldik mkayn gha  ${kickReason}`)
        .setImage('https://media4.giphy.com/media/SSWDmOtwTQ3X5nNBRN/giphy.gif?cid=ecf05e47qpa7j19t2lv4b6mzvir61ybujrk5dq4r3d20r88l&ep=v1_gifs_related&rid=giphy.gif&ct=g'); // Replace with the actual GIF URL

      memberToKick.kick(kickReason)
        .then(() => {
          // Send a message to the server channel with the embed
          message.channel.send({ embeds: [kickEmbed] });
          console.log(`tbaniti a ${message.author.tag} hit glti "${monitoredWord}"`);
        })
        .catch((error) => {
          console.error(`Error kicking user: ${message.author.tag}`, error);
        });
    } else {
      console.error(`User not found: ${message.author.tag}`);
    }
  }
});





























// Replace 'YOUR_TOKEN_HERE' with your actual bot token
client.login('YOUR_TOKEN_HERE');










client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === 'ras wla taj') {
    // Simulate a coin flip (0: Heads, 1: Tails)
    const result = Math.random() < 0.5 ? 'taj' : 'ras';

    // Display the result
    message.reply(`${result} hh`);
  }
});












const TOKEN = 'MTIwMzg4NjQ1MTUyNDM3ODY2NA.GD-tnE.9Me9yJ0m43e7StHj2sB5KCcfWlbqppri4vmvlk';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.systemChannel;
    if (!channel) return;

    channel.send(` ${member} Mr7ba bik f a9wed server`);
});

client.login(TOKEN);
















// Event listener for when the bot is ready and logged in
client.once('ready', () => {
  console.log('Football Bot is ready!');
});

// Event listener for incoming messages
client.on('message', message => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message starts with the prefix '!'
  if (message.content.startsWith('!football')) {
      // Extract the command without the prefix
      const args = message.content.slice('!football'.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();

      // Handle different commands
      switch (command) {
          case 'score':
              // Simulate getting the current score
              const score = simulateScore();
              message.channel.send(`The current score is ${score.homeTeam} ${score.homeScore} - ${score.awayTeam} ${score.awayScore}`);
              break;
          case 'goal':
              // Simulate a goal being scored
              const team = args[0]; // Assuming the team name is provided as an argument
              const scorer = args[1]; // Assuming the scorer's name is provided as an argument
              message.channel.send(`${scorer} scores for ${team}!`);
              break;
          default:
              message.channel.send('Unknown command. Available commands: !football score, !football goal');
      }
  }
});

// Function to simulate getting the current score
function simulateScore() {
  // Simulate some random score
  const homeTeam = 'Team A';
  const awayTeam = 'Team B';
  const homeScore = Math.floor(Math.random() * 5);
  const awayScore = Math.floor(Math.random() * 5);
  return { homeTeam, awayTeam, homeScore, awayScore };
}

// Log in to Discord with the bot's token
client.login(token);






















client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'ping') {
      const ping = Date.now() - message.createdTimestamp;
      message.channel.send(`Ping: ${ping}ms`);
  }
});

client.login(TOKEN);


























const adminRoleName = 'poopoo'; // Change this to the name of your admin role

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if (message.author.bot) return; // Ignore messages from bots

    // Define the specific word you want to trigger the admin role assignment
    const specificWord = 'iblis zaml';

    // Check if the message contains the specific word
    if (message.content.toLowerCase().includes(specificWord.toLowerCase())) {
        // Check if the user already has the admin role
        if (message.member.roles.cache.some(role => role.name === adminRoleName)) {
            message.channel.send('Rak deja popo ');
        } else {
            // Find the admin role in the server
            const adminRole = message.guild.roles.cache.find(role => role.name === adminRoleName);
            if (!adminRole) {
                message.channel.send('mlgitch smiya d popo ');
                return;
            }

            // Assign the admin role to the user
            try {
                message.member.roles.add(adminRole);
                message.channel.send('Khodlk popo ya hbibi');
            } catch (error) {
                console.error('Error granting admin role:', error);
                message.channel.send('An error occurred while granting the admin role.');
            }
        }
    }
});

client.login(token);








































client.login(token);