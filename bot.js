const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage(' **Aleyküm selam,  hoş geldin** ^^'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('ready', () => {
  client.user.setPresence({
      game: {
          name: `= YARDIM = TAVSİYE!`,
          name: `= YARDIM = TAVSİYE!`,
          type: 'PLAYING'
          // Değerler:
          // PLAYING: Oynuyor
          // WATCHING: İzliyor
          // LISTENING: Dinliyor
		  // STREAMİNG: YAYINDA
      },
      status: 'online'
      // Değerler:
      // online: Çevrimiçi
      // dnd: Rahatsız Etmeyin
      // idle: Boşta
  })
})
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.channel.sendMessage('İyiyiz senden naber? :thinking:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsınız') {
    msg.channel.sendMessage('İyiyiz sen nasılsın?');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bilmem') {
    msg.channel.sendMessage('Senin bilmediğini biz nasıl bilek');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bilmm') {
    msg.channel.sendMessage('Senin bilmediğini biz nasıl bilek');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hmm') {
    msg.channel.sendMessage('Ne düşünüon acaba :thinking: ');
  }
});

const invites = {};
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "davet-takip");
    logChannel.send(`**${member.user.tag}** Sunucuya kat?ld? davet eden **${inviter.tag}** daveti kullanan kisi say?s? **${invite.uses}**`);
  });
});

client.login(ayarlar.token);