import { Command } from 'discord.js-commando';
import axios from 'axios';

class BoredCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'bored',
      group: 'fun',
      memberName: 'bored',
      description: 'Suggests you something to do.'
    });
  }

  run(message) {
    axios.get('http://boredapi.com/api/activity/').then((response) => {
      message.say(response.data.activity, { tts: true });
    })
  }
}

export default BoredCommand;
