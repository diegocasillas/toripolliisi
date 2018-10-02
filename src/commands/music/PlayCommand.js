import { Command } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import { searchVideo } from '../../utils/youtube';

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
          key: 'requestedVideo',
          prompt: 'Introduce a YouTube\'s video URL.',
          type: 'string'
        }
      ],
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

  run(message, { requestedVideo }) {
    searchVideo(requestedVideo).then((video) => {
      const videoUrl = 'https://www.youtube.com/watch?v=' + video.id;
      const embed = this.getEmbed(
        video.title,
        message.author,
        video.thumbnails.default.url,
        videoUrl
      );

      this.client.musicManager.play(message, videoUrl)
        .then(() => message.channel.send(embed))
        .catch((error) => {
          message.reply(error);
        });
    });
  }
}

export default PlayCommand;
