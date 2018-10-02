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

  getResultVideo(video) {
    return new Promise((resolve, reject) => {
      if (isUrl(video)) {
        resolve(getVideo(video));
      } else {
        resolve(searchVideo(video));
      }
    });
  }

  getEmbed(title, requestedBy, image, url) {
    return new RichEmbed()
      .setTitle(title)
      .setDescription('Requested by ' + requestedBy)
      .setColor('0xFFFFFF')
      .setThumbnail(image)
      .setURL(url);
  }

  run(message, { video }) {
    this.getResultVideo(video).then((result) => {
      const videoUrl = 'https://www.youtube.com/watch?v=' + result.id;
      const embed = this.getEmbed(result.title, message.author, result.thumbnails.default.url, videoUrl);

      this.client.musicManager.play(message, videoUrl).then(() => message.channel.send(embed)).catch((error) => {
        message.reply(error);
      });
    });
  }
}

export default PlayCommand;
