import { Command } from 'discord.js-commando';

class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      aliases: ['leave', 'bye', 'moikka', 'gtfo'],
      group: 'music',
      memberName: 'leave',
      description: 'Leaves the channel.'
    });
  }

  run(message) {
    this.leave(message.member.voiceChannel);
    
    return message.say('Bye!', { tts: true });
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
