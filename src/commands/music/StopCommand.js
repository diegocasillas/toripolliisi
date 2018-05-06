import { Command } from 'discord.js-commando';

class StopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      aliases: ['para'],
      group: 'music',
      memberName: 'stop',
      description: 'Para la canción actual.'
    });
  }

  run(message) {
    return this.stop(message.member);
  }

  stop(member) {
    return member.voiceChannel && member.voiceChannel.connection ?
      member.voiceChannel.connection.dispatcher.end() : null;
  }
}

export default StopCommand;
