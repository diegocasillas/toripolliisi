import { Command } from 'discord.js-commando';

class CoinCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'coin',
      aliases: ['moneda', 'lanzar', 'caraocruz'],
      group: 'fun',
      memberName: 'coin',
      description: 'Lanza una moneda.',
      examples: ['moneda', 'lanzar', 'caraocruz']
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
