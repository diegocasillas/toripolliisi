import { Command } from 'discord.js-commando';

class ResumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'resume',
      aliases: ['resume', 'continue', 'jatkaa'],
      group: 'music',
      memberName: 'resume',
      description: 'Resumes the current song.'
    });
  }

  run(message) {
    return this.client.musicManager.resume(message);
  }
}

export default ResumeCommand;
