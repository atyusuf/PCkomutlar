const Discord = require('discord.js');
const soru = [
  { sc: "Bulutlar Ne Renktedir?", a: ["renksizdir", "görünmezdir"] },
  { sc: "Dünyadaki En Ünlü İçecek Markası Nedir?.", a: ["kola", "koka kola", "coka cola"] },
  { sc: "Avox Hangi Programlama Dilinden Meydana Gelmiştir?", a: ["javascript", "discord.js"] },
  { sc: "Güneş Sistemindeki 7. Gezegen Nedir?", a: ["uranüs"] },
  { sc: "Dünyanın En Büyük Adasının Adı Nedir?", a: ["greenland", "grönland"] },
  { sc: "Dünyanın En Büyük Ormanının Adı Nedir?", a: ["amazon"] },
  { sc: "Dünyanın En Büyük Okyanusunun Adı Nedir?.", a: ["pasifik"] },
  { sc: "Gökkuşağı Kaç Renkten Oluşur?", a: ["7", "yedi"] },
  { sc: "Bilgisayarlardaki 'OS' Yazısı Ne Anlama Gelmektedir?", a: ["operating system", "sistem", "sürüm"] },
  { sc: "Jüpiterin Kaç Uydusu Vardır?", a: ["63", "altmış üç"] },
  { sc: "Dünya Kaç Katmandan Oluşur?", a: ["5", "beş"] },
  { sc: "Aya İlk Ayak Basan İnsan Kimdir?", a: ["neil armstrong", "armstrong"] },
  { sc: "Hava Elektiriği İletirmi?", a: ["bağzen", "bazen"] },
  { sc: "İlk Kadın Pilotun Adı Nedir?", a: ["sabiha gökçen"] },
  { sc: "Dünyanın En Soğuk Yeri Neresidir?", a: ["antartika"] },
  { sc: "Dünyanın En Sıcak Yeri Neresidir?", a: ["el aziziye"] },
  { sc: "Türkiyeden Diğer Ülkere Nazaran Daha Fazla Çıkan Madeni Nedir?", a: ["bor"] },
  { sc: "Atatürkün Adı Olan Kemal İsmini Kim Koymuştur?", a: ["matematik hocası", "matematik öğretmeni", "matcısı"] },
  { sc: "2018 Yılında Ölen Ünlü Fizikçi Kimdir", a: ["stephen hawking", "hawking"] },
  { sc: "2018 Yılında Ölen Ünlü Dj Kimdir (En Ünlü Şarkısı: Wake Me Up)", a: ["avicii", "tim bergling", "bergling"] },
  { sc: "MonSTeR Botun Yapımcısı Kimdir?", a: ["dearswatt", "DeaRSwaT", "Ege"] },
  { sc: "Gnarge Botun Yapımcısı Kimdir?", a: ["Emirhan", "Saraç", "Emirhan Saraç", "EmirhanSaraç"] }
];
const options = {
  max: 1,
  time: 300000,
  errors: ["time"],
};

module.exports.run = async (Octopus, message, args) => {
  
  const item = soru[Math.floor(Math.random() * soru.length)];
  await message.channel.send(item.sc);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Tebrikler: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Verilen Doğru Cevap: \`${winnerMessage.content}\``)
                                 .setFooter(`Sorulan Soru: ${item.sc}`)
                                 .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('Soruyu Zamanında Bilemedin')
                                 .setTitle(`Cevap: \`${item.a}\``)
                                 .setFooter(`Sorulan Soru: ${item.sc}`)
                                })
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sinav'],
  permLevel: 0
};

exports.help = {
  name: 'sınav'
};