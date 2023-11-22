import {StyleSheet, View} from 'react-native';
import React from 'react';
import FeedScreen from './screens/FeedScreen/FeedScreen';

const TiktokScreen = () => {
  return (
    <View style={styles.container}>
      <FeedScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TiktokScreen;
