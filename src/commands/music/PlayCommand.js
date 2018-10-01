import { Command } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import isUrl from 'is-url';
import { searchVideo, getVideo } from '../../utils/youtube';

class PlayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'play',
      aliases: ['play', 'soita'],
      group: 'music',
      memberName: 'play',
      description: 'Plays a song from YouTube.',
      examples: ['play https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
      args: [
        {
          key: 'video',
          prompt: 'Introduce a YouTube\'s video URL.',
          type: 'string'
        }
      ],
    });
  }

  run(message, { video }) {
    if (isUrl(video)) {
      getVideo(video).then((result) => {
        const embed = new RichEmbed()
          .setTitle(result.title)
          .setDescription('Requested by ' + message.author)
          .setColor('0xFFFFFF')
          .setThumbnail(result.thumbnails.default.url);

        this.client.musicManager.play(message, video).then(() => message.channel.send(embed)).catch((error) => {
          message.reply(error);
        });
      })
    } else {
      searchVideo(video).then((result) => {
        video = 'https://www.youtube.com/watch?v=' + result.id;

        const embed = new RichEmbed()
          .setTitle(result.title)
          .setDescription('Requested by ' + message.author)
          .setColor('0xFFFFFF')
          .setThumbnail(result.thumbnails.default.url);

        this.client.musicManager.play(message, video).then(() => message.channel.send(embed)).catch((error) => {
          message.reply(error);
        });
      });
    }

    return;
  }
}

export default PlayCommand;
