import { Command } from 'discord.js-commando';

class CoinCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'coin',
      aliases: ['coin', 'kolikko', 'flip', 'throw', 'heitä', 'random'],
      group: 'fun',
      memberName: 'coin',
      description: 'Flips a coin.'
    });
  }

  run(message) {
    return message.say(this.throwCoin());
  }

  throwCoin() {
    const heads = ':robot:';
    const tails = ':regional_indicator_x:';

    return Math.random() > 0.5 ? heads : tails;
  }
}

export default CoinCommand;
