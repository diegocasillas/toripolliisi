import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';

class ResumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'resume',
      aliases: ['resume', 'continue'],
      group: 'music',
      memberName: 'resume',
      description: 'Resumes the current song.'
    });
    this.musicManager = new MusicManager();
  }

  run(message) {
    return this.musicManager.resume(message);
  }
}

export default ResumeCommand;
