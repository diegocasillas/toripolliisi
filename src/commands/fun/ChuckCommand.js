import { Command } from 'discord.js-commando';
import axios from 'axios';

class ChuckCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'chuck',
      group: 'fun',
      memberName: 'chuck',
      description: 'Says something about Chuck Norris.'
    });
  }

  run(message) {
    axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
      message.say(response.data.value, { tts: true });
    })
  }
}

export default ChuckCommand;
