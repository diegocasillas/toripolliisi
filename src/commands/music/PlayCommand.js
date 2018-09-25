import { Command } from 'discord.js-commando';

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
    this.client.musicManager.play(message, video).catch((error) => {
      message.reply(error);
    });

    return;
  }
}

export default PlayCommand;
