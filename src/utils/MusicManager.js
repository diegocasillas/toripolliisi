import ytdl from 'ytdl-core';

class MusicManager {
  constructor() {
    this.streamOptions = { seek: 0, volume: 0.1 };
  }

  join(message) {
    return new Promise((resolve, reject) => {
      if (!message.guild || !message.member.voiceChannel) {
        reject('**You must be connected to a channel.**');
      } else {
        resolve(message.member.voiceChannel.join());
      }
    });
  }

  createStream(video) {
    return ytdl(video, { filter: 'audioonly' });
  }

  createDispatcher(connection, stream) {
    return connection.playStream(stream, this.streamOptions);
  }

  play(message, video) {
    return new Promise((resolve, reject) => {
      this.join(message).then((connection) => {
        const stream = this.createStream(video);

        resolve(this.createDispatcher(connection, stream));
      }).catch((error) => {
        reject(error);
      });
    });
  }

  next(dispatcher, connection, video) {
    dispatcher.on('end', (reason) => {
      if (reason && reason !== 'stopped') {
        const stream = this.createStream(video);
        const newDispatcher = this.createDispatcher(connection, stream);

        return this.next(newDispatcher, connection, video);
      }
    });
  }

  stop(message) {
    const dispatcher = this.getDispatcher(message);

    if (dispatcher) {
      return dispatcher.end('stopped');
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
