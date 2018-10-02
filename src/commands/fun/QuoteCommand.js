import { Command } from 'discord.js-commando';
import quotes from '../../resources/quotes.js';
import axios from 'axios';

class QuoteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'quote',
      aliases: ['quote', 'speak', 'say'],
      group: 'fun',
      memberName: 'quote',
      description: 'Says something random'
    });
  }

  run(message) {
    return axios.get('https://talaikis.com/api/quotes/random/').then((response) => {
      message.say(response.data.quote, { tts: true });
    })
  }
}

export default QuoteCommand;
