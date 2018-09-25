import { Command } from 'discord.js-commando';

class StopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      aliases: ['stop', 'lopettaa'],
      group: 'music',
      memberName: 'stop',
      description: 'Stops the current song.'
    });
  }

  run(message) {
    return this.client.musicManager.stop(message);
  }
}

export default StopCommand;
