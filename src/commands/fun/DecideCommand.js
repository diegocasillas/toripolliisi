import { Command } from 'discord.js-commando';

class DecideCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'decide',
      group: 'fun',
      memberName: 'decide',
      description: 'Decides yes or no.'
    });
  }

  run(message) {
    const yes = 'Yes :thumbsup:';
    const no = 'No :thumbsdown:';
    const decision = Math.random() > 0.5 ? yes : no;
    
    return message.say(decision);
  }
}

export default DecideCommand;
