import {View} from 'react-native';
import React, {useRef} from 'react';
import {VideoRef} from 'react-native-video';
import Player from '../../components/Player';

const TiktokScreen = () => {
  const ref = useRef<VideoRef>(null);

  return (
    <View style={{flex: 1}}>
      <Player ref={ref} />
    </View>
  );
};

export default TiktokScreen;
