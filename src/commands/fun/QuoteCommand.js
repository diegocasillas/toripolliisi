import { Command } from 'discord.js-commando';
import { random } from '../../utils/helpers.js';
import quotes from '../../resources/quotes.js';

class QuoteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'quote',
      aliases: ['ilustranos', 'memea', 'cita', 'habla'],
      group: 'fun',
      memberName: 'quote',
      description: 'Lo mismo se pone a memear que a filosofar.',
      examples: ['ilustranos', 'memea']
    });
    this.quotes = quotes;
  }

  run(message) {
    return message.say(random(this.quotes));
  }
}

export default QuoteCommand;
