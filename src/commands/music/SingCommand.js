import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';
import { random } from '../../utils/helpers.js';
import songs from '../../resources/songs.js';

class SingCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'sing',
      aliases: ['canta', 'cantame'],
      group: 'music',
      memberName: 'sing',
      description: 'Reproduce una canción aleatoria.'
    });
    this.musicManager = new MusicManager();
    this.songs = songs;
  }

  run(message) {
    const video = random(this.songs);
    return this.musicManager.join(message, video);
  }
}

export default SingCommand;
