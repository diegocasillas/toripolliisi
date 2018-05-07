import ytdl from 'ytdl-core';

class MusicManager {
  constructor() {
    this.streamOptions = { seek: 0, volume: 0.5 };
  }

  join(message, video) {
    if (message.guild) {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join().then((connection) => {
          return this.play(video, connection);
        }).catch(() => message.reply('**Ha ocurrido un error en la reproducción :(**'));
      } else {
        message.reply('**Debes estar conectado a un canal.**');
      }
    }
  }

  play(video, connection) {
    const stream = ytdl(video, { filter: 'audioonly' });

    return connection.playStream(stream, this.streamOptions);
  }

  stop(message) {
    const dispatcher = this.getDispatcher(message);

    if (dispatcher) {
      return dispatcher.end();
    }
  }

  pause(message) {
    const dispatcher = this.getDispatcher(message);

    if (dispatcher) {
      return dispatcher.pause();
    }
  }

  resume(message) {
    const dispatcher = this.getDispatcher(message);

    if (dispatcher) {
      return dispatcher.resume();
    }
  }

  getDispatcher(message) {
    const member = message.member;

    return member.voiceChannel && member.voiceChannel.connection ?
      member.voiceChannel.connection.dispatcher : null;
  }
}

export default MusicManager;
