import { Client } from 'discord.js-commando';
import path from 'path';

export default class Toripolliisi extends Client {
  constructor(owner, config) {
    super({ owner });
    this.groups = config.groups;
  }

  init() {
    this.register();

    this.on('ready', () => {
      console.log(`Logged in as ${this.user.tag}.`);
      this.user.setActivity('Oulu', { type: 'WATCHING' });
    });
  }

  register() {
    this.registry.registerDefaultTypes();
    this.registry.registerGroups(this.groups);
    this.registry.registerDefaultGroups();
    this.registry.registerDefaultCommands({ commandState: false });
    this.registry.registerCommandsIn(path.join(__dirname, 'commands'));
  }
}
