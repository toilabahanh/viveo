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
          uri: 'https://vod-progressive.akamaized.net/exp=1700103507~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2712%2F21%2F538561465%2F2552299725.mp4~hmac=ce6a8570496c96c35549988cb59d83c23a6d83b128af5e6f4673e4fd21c7a4c4/vimeo-prod-skyfire-std-us/01/2712/21/538561465/2552299725.mp4?download=1&filename=pexels-mart-production-7565438+%281080p%29.mp4',
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
