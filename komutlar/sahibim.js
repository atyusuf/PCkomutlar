const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
      .addField(':bust_in_silhouette:  Yapımcım:', '<@>347621560200200193 \n `★ẏṳṠṏ#1376`')
      .addField(':paperclip: Botun Başlanma Zamanı:', "Bot **13.01.2019**'de yapılmaya başlanmıştır")
    .setFooter('[BOT]Screain', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['sahibim', 'sahib', 'bot-bilgi', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'sahibim',
  description: 'Botun Sahibini Gösterir.',
  usage: '★ẏṳṠṏ#1376'
};

//made by: ! ƁƦ ★ẏṳṠṏ#1376