import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';

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
    this.musicManager = new MusicManager();
  }

  run(message, { video }) {
    this.musicManager.join(message, video);
  }
}

export default PlayCommand;
