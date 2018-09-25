import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';

class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      aliases: ['pause', 'wait', 'odota'],
      group: 'music',
      memberName: 'pause',
      description: 'Pauses the current song.'
    });
    this.musicManager = new MusicManager();
  }

  run(message) {
    return this.musicManager.pause(message);
  }
}

export default PauseCommand;
