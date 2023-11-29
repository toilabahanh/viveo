import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import PostSingleOverlay from '../PostSingleOverlay/PostSingleOverlay';

export const PostSingle = forwardRef(({item, index}, parentRef) => {
  const ref = useRef(null);

  useImperativeHandle(parentRef, () => ({
    play,
    unload,
    stop,
  }));

  const play = async () => {
    console.log('PLAY')
    if (ref.current == null) {
      return;
    }
  };

  const stop = async () => {
    console.log('STOP')
    if (ref.current == null) {
      return;
    }
  };

  const unload = async () => {
    console.log('UNLOAD')
    if (ref.current == null) {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={ref}
        style={styles.videoContainer}
        paused={false}
        source={{uri: item?.video_files[0]?.link}}
      />
      <PostSingleOverlay item={item} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033',
  },
  videoContainer: {
    flex: 1,
  },
});

export default PostSingle;
