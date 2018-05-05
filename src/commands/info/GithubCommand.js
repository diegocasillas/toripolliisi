import { Command } from 'discord.js-commando';
import { homepage, bugs } from '../../../package.json';

class GithubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['repositorio', 'repo', 'git'],
      group: 'info',
      memberName: 'github',
      description: 'Enlaza al repositorio de Github.'
    });
  }

  run(message) {
    const parts = [`**Repositorio:** ${homepage}`, `**Reportar bugs:** ${bugs.url}`];

    return parts.forEach((part) => message.say(part));
  }
}

export default GithubCommand;
