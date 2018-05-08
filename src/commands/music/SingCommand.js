import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';
import songs from '../../resources/songs.js';
import { random } from '../../utils/helpers.js';

class SingCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'sing',
      aliases: ['canta', 'cantame'],
      group: 'music',
      memberName: 'sing',
      description: 'Reproduce una canción aleatoria.',
      args: [
        {
          key: 'forever',
          prompt: '¿Reproducir hasta el infinito y más allá?',
          type: 'string',
          default: '',
          validate: (forever) => {
            const aliases = [
              'forever', 'siempre', 'mucho', 'infinito'
            ];

            if (!aliases.includes(forever)) {
              return '¿Qué? No te entiendo. ¿Querías decir forever?';
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
