import { Command } from 'discord.js-commando';
import { random } from '../../utils/helpers.js';
import greetings from '../../resources/greetings.js';

class GreetingCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'greeting',
      aliases: ['greeting', 'hello', 'hi', 'yo', 'moi', 'hei', 'terve', 'sup'],
      group: 'fun',
      memberName: 'greeting',
      description: 'Greets in a lovely way.'
    });
    this.greetings = greetings;
  }

  run(message) {
    return message.say(random(this.greetings));
  }
}

export default GreetingCommand;
