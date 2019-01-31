const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Donald Trump Doları Arttırıyor.').then(message => {
      var espriler = ['https://cdn.discordapp.com/attachments/516186935480418312/538036825072336936/Screenshot_4.jpg','https://cdn.discordapp.com/attachments/516186935480418312/538036823121854464/indir.jpg','https://cdn.discordapp.com/attachments/516186935480418312/538036821301657612/dt.png','https://cdn.discordapp.com/attachments/516186935480418312/538036817979506699/1343869.png','https://cdn.discordapp.com/attachments/516186935480418312/538036816348184616/1305063.jpg','https://cdn.discordapp.com/attachments/516186935480418312/538036813764231198/1300425.png','https://cdn.discordapp.com/attachments/516186935480418312/538036812384305153/1299934.png','https://cdn.discordapp.com/attachments/516186935480418312/538036809796681748/36529.jpg',];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dt', 'donaldtrumpcaps', 'donald', 'trump'],
  permLevel: 0
};

exports.help = {
  name: 'donaldtrump',
  description: 'Donald Trump Capsi Yapar.',
  usage: '&donaldtrump'
}; 