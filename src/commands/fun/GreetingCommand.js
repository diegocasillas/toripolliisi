import { Command } from 'discord.js-commando';
import { random } from '../../utils/helpers.js';
import greetings from '../../resources/greetings.js';

class GreetingCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'greeting',
      aliases: ['hola', 'ola', 'saluda'],
      group: 'fun',
      memberName: 'greeting',
      description: 'Saluda cariñosamente.',
      examples: ['hola', 'ola', 'saluda']
    });
    this.greetings = greetings;
  }

  run(message) {
    return message.say(random(this.greetings));
  }
}

export default GreetingCommand;
