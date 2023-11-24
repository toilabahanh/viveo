import React, {forwardRef, useState} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Pressable, StyleSheet} from 'react-native';
import Video, {ReactVideoProps, VideoRef} from 'react-native-video';

interface IPlayer extends ReactVideoProps {
  containerStyle?: StyleProp<ViewStyle>;
}

type Ref = VideoRef;

const Player = forwardRef<Ref, IPlayer>((props, ref) => {
  const [_video, setVideo] = useState({});
  const [rate, setRate] = useState(1);
  const {repeat = true, containerStyle} = props;

  const handlePressVideo = () => {
    setRate(rate === 1 ? 0 : 1);
  };

  return (
    <Pressable
      onPress={handlePressVideo}
      style={[styles.container, containerStyle]}>
      <Video
        ref={ref}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          isNetwork: true,
        }}
        onLoad={e => {
          setVideo(prevData => ({
            ...prevData,
            ...e.naturalSize,
            duration: e.duration,
          }));
          console.log(e);
        }}
        onProgress={e => {
          setVideo(prevData => ({...prevData, currentTime: e.currentTime}));
        }}
        rate={rate}
        repeat={repeat}
        style={styles.backgroundVideo}
        {...props}
      />
    </Pressable>
  );
});

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
