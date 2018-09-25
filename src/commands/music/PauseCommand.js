import { Command } from 'discord.js-commando';

class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      aliases: ['pause', 'wait', 'odota'],
      group: 'music',
      memberName: 'pause',
      description: 'Pauses the current song.'
    });
  }

  run(message) {
    return this.client.musicManager.pause(message);
  }
}

export default PauseCommand;
