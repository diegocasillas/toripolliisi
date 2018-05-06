import { Command } from 'discord.js-commando';
import ytdl from 'ytdl-core';

class PlayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'play',
      aliases: ['toca'],
      group: 'music',
      memberName: 'play',
      description: 'Reproduce una canción desde YouTube.',
      examples: ['play https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'toca https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
      args: [
        {
          key: 'video',
          prompt: 'Introduce un enlace a un vídeo de YouTube.',
          type: 'string'
        }
      ],
    });
    this.streamOptions = { seek: 0, volume: 0.5 };
  }

  run(message, { video }) {
    this.join(message, video);
  }

  join(message, video) {
    if (message.guild) {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join().then((connection) => {
          return this.play(video, connection);
        }).catch(() => message.reply('**Ha ocurrido un error en la reproducción :(**'));
      } else {
        message.reply('**Debes estar conectado a un canal.**');
      }
    }
  }

  play(video, connection) {
    const stream = ytdl(video, { filter: 'audioonly' });

    return connection.playStream(stream, this.streamOptions);
  }
}

export default PlayCommand;
