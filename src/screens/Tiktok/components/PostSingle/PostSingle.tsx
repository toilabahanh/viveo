import React, {forwardRef, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import PostSingleOverlay from '../PostSingleOverlay/PostSingleOverlay';

export const PostSingle = forwardRef(() => {
  const ref = useRef(null);

  return (
    <View style={styles.container}>
      {/* <Video
        ref={ref}
        style={styles.videoContainer}
        paused={false}
        source={{uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'}}
      /> */}
      <PostSingleOverlay />
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
