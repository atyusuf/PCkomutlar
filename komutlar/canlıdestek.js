const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', '531142662850609153')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» [BOT]Screain DİSCORD BOT | Canlı Destek Ekibi")
  .setDescription("**📞STM BOT Yetkilileri Aranıyor...**")
  .setDescription("**LÜTFEN BULUNDUĞUN GRUPTA `SESLİ SOHBET ODASINA GEÇ` EĞER YETKİLİLER ODADA KİMSE GÖRMÜYORSA GRUPTAN GERİ ÇIKACAKTIR**")
  .setFooter("5 Dakika içinde yetkili sizle iletişime geçmezse bu mesajı tekrar oku :) (şaka la yeniden bu komudu kullan) ")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("STM OYUN ÇILGINI | 📞 Canlı Destek")
  .addField('🚹🚺** Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('✔**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["canlı-destek"],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};
