import { Command } from 'discord.js-commando';
import { homepage, bugs } from '../../../package.json';

class GithubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['repository', 'repo', 'git'],
      group: 'info',
      memberName: 'github',
      description: 'Links to the GitHub repository.'
    });
  }

  run(message) {
    const parts = [`**Repository:** ${homepage}`, `**Report bugs:** ${bugs.url}`];

    return parts.forEach((part) => message.say(part));
  }
}

export default GithubCommand;
