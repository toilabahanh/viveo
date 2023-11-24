import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const Avatar = ({size = 32, uri = ''}) => {
  return (
    <View
      style={{
        ...styles.container,
        width: size,
        height: size,
      }}>
      <FastImage
        source={{uri}}
        resizeMode={FastImage.resizeMode.contain}
        style={{...styles.avatar, width: size - 2, height: size - 2}}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 100,
  },
});
