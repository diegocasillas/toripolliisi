import { Command } from 'discord.js-commando';
import { random } from '../../utils/helpers.js';
import quotes from '../../resources/quotes.js';

class QuoteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'quote',
      aliases: ['quote', 'speak', 'say'],
      group: 'fun',
      memberName: 'quote',
      description: 'Says something random'
    });
    this.quotes = quotes;
  }

  run(message) {
    return message.say(random(this.quotes), { tts: true });
  }
}

export default QuoteCommand;
