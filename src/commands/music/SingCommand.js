import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';
import songs from '../../resources/songs.js';
import { random } from '../../utils/helpers.js';

class SingCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'sing',
      aliases: ['sing', 'laulaa'],
      group: 'music',
      memberName: 'sing',
      description: 'Plays a random song.',
      args: [
        {
          key: 'forever',
          prompt: 'Play forever?',
          type: 'string',
          default: '',
          validate: (forever) => {
            const aliases = [
              'forever', 'always', 'infinite'
            ];

            if (!aliases.includes(forever)) {
              return 'Mitä? I don\'t understand. Did you want to say "forever"?';
            }

            return true;
          }
        }
      ],
    });
    this.musicManager = new MusicManager();
    this.songs = songs;
  }

  run(message, { forever }) {
    if (!forever) {
      this.musicManager.play(message, random(this.songs)).catch((error) => {
        message.reply(error);
      });

      return;
    }

    this.musicManager.play(message, random(this.songs)).then((dispatcher) => {
      this.musicManager.next(dispatcher, message.member.voiceChannel.connection, random(this.songs));
    }).catch((error) => message.reply(error));

    return;
  }
}

export default SingCommand;
