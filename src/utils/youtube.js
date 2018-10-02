import YouTube from 'simple-youtube-api';
import isUrl from 'is-url';


const youtube = new YouTube(process.env.YOUTUBE);

export const searchVideo = (requestedVideo) => {
  return new Promise((resolve, reject) => {
    if (isUrl(requestedVideo)) {
      resolve(youtube.getVideo(requestedVideo)
        .then((result) => result));
    } else {
      resolve(youtube.searchVideos(requestedVideo, 1)
        .then((results) => results[0]));
    }
  });
};
