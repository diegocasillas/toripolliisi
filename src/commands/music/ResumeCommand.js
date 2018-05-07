import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';

class ResumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'resume',
      aliases: ['continua', 'sigue'],
      group: 'music',
      memberName: 'resume',
      description: 'Continúa la canción actual.'
    });
    this.musicManager = new MusicManager();
  }

  run(message) {
    return this.musicManager.resume(message);
  }
}

export default ResumeCommand;
