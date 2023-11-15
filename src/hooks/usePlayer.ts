import {RefObject} from 'react';
import {VideoRef} from 'react-native-video';

const usePlayer = (ref: RefObject<VideoRef>) => {
  const playVideo = () => {
    ref.current?.resume();
  };
  const pauseVideo = () => {
    ref.current?.pause;
  };

  return {
    playVideo,
    pauseVideo,
  };
};

export default usePlayer;
