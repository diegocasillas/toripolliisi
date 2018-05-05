import { Command } from 'discord.js-commando';
import quotes from '../../resources/quotes.js';

export default class QuoteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'quote',
      aliases: ['ilustranos', 'memea'],
      group: 'fun',
      memberName: 'quote',
      description: 'Lo mismo se pone a memear que a filosofar.',
      examples: ['ilustranos', 'memea']
    });
  }

  run(message) {
    return message.say(this.randomQuote());
  }

  randomQuote() {
    const random = Math.floor(Math.random() * (quotes.length - 1));

    return quotes[random];
  }
}
