import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';

class StopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      aliases: ['para'],
      group: 'music',
      memberName: 'stop',
      description: 'Para la canción actual.'
    });
    this.musicManager = new MusicManager();
  }

  run(message) {
    return this.musicManager.stop(message);
  }
}

export default StopCommand;
