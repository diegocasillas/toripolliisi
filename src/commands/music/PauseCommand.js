import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';

class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      aliases: ['pausa', 'espera'],
      group: 'music',
      memberName: 'pause',
      description: 'Pausa la canción actual.'
    });
    this.musicManager = new MusicManager();
  }

  run(message) {
    return this.musicManager.pause(message);
  }
}

export default PauseCommand;
