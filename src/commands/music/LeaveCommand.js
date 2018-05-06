import { Command } from 'discord.js-commando';

class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      aliases: ['adios', 'bye', 'vete', 'gtfo', 'pirate'],
      group: 'music',
      memberName: 'leave',
      description: 'Se va del canal.'
    });
  }

  run(message) {
    return this.leave(message.member.voiceChannel);
  }

  leave(voiceChannel) {
    if (voiceChannel && voiceChannel.connection) {
      voiceChannel.connection.disconnect();
      return voiceChannel.leave();
    }

    return null;
  }
}

export default LeaveCommand;
