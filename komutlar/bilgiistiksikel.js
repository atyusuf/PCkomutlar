const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.addField(`Ping;`, client.ping + `ms`)
.addField(`Çalışma Süresi;`, `${duration}`)
.addField(`Sunucular;`, client.guilds.size )
.addField('Müzik Çalınan Sunucu Sayısı;', client.voiceConnections.size)
.addField(`Kullanıcılar;`, client.guilds.reduce((a, b) => a + b.memberCount, 0))
.addField('Kanallar;', client.channels.size)   
.addField(`Yapımcı;`,`<@347621560200200193> `)
.setFooter('AterNetwork ', client.user.avatarURL)
message.channel.send(embed);
}
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['istatistik', 'botbilgi', 'bot-bilgi', 'i'],
permLevel: 0
};

exports.help = {
name: 'bilgi-bot',
description: 'İstediğiniz şeyi bota yazdırır.',
usage: 'duyuru [duyuru]'
};