const YouTube = require('simple-youtube-api');
const youtube = new YouTube(process.env.YOUTUBE);

export const searchVideo = name => youtube.searchVideos(name, 1)
  .then(results => results[0]);

export const getVideo = url => youtube.getVideo(url).then(result => result);