import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';

class StopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      aliases: ['stop'],
      group: 'music',
      memberName: 'stop',
      description: 'Stops the current song.'
    });
    this.musicManager = new MusicManager();
  }

  run(message) {
    return this.musicManager.stop(message);
  }
}

export default StopCommand;
