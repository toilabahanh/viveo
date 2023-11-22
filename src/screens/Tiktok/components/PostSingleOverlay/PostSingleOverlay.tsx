import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {throttle} from 'throttle-debounce';
import {AppStyles} from '../../../../common/AppStyle';
import {AppAssets} from '../../../../common/AppAssets';
import IC_ICK from './../../../../../assets/svgs/ic_tick.svg';
import {SvgUri} from 'react-native-svg';

export default function PostSingleOverlay() {
  const [currentLikeState, setCurrentLikeState] = useState({
    state: false,
    counter: 0,
  });

  useEffect(() => {}, []);

  const handleUpdateLike = useMemo(() => throttle(500, true, () => {}), []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={AppStyles.displayName}>{'user?.displayName'}</Text>
        <Text style={styles.description}>{'post?.description'}</Text>
      </View>

      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => {}}>
          {/* <Image style={styles.avatar} source={{ uri: user?.photoURL }} /> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleUpdateLike}>
          <AppAssets.ic_heart width={40} height={40} />
          <Text style={AppStyles.featureStyle}>{'1'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
          <AppAssets.ic_message width={40} height={40} />

          <Text style={AppStyles.featureStyle}>{'1'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
          <AppAssets.ic_share width={40} height={40} />

          <Text style={AppStyles.featureStyle}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  description: {
    marginTop: 10,
    color: 'white',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 30,
  },
  leftContainer: {
    alignItems: 'center',
  },
  actionButton: {
    paddingBottom: 16,
  },
});
