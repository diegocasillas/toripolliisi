import { Command } from 'discord.js-commando';
import axios from 'axios';

class JokeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'joke',
      group: 'fun',
      memberName: 'joke',
      description: 'Tells a joke.'
    });
  }

  run(message) {
    axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } }).then((response) => {
      message.say(response.data.joke, { tts: true });
    })
  }
}

export default JokeCommand;
