import { Client } from 'discord.js-commando';
import path from 'path';

export default class Trackpoth extends Client {
  constructor(owner, config) {
    super({ owner, commandPrefix: config.commandPrefix });
    this.groups = config.groups;
  }

  init() {
    this.registry.registerGroups(this.groups);
    this.registry.registerDefaults();
    this.registry.registerCommandsIn(path.join(__dirname, 'commands'));

    this.on('ready', () => {
      console.log(`Logged in as ${this.user.tag}.`);
      this.user.setActivity('Hello World');
    });
  }
}
