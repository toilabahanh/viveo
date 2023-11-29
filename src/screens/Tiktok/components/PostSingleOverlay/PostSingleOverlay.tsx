import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  Easing,
} from 'react-native';
import {throttle} from 'throttle-debounce';
import {AppStyles} from '../../../../common/AppStyle';
import {AppAssets} from '../../../../common/AppAssets';
import TextTicker from 'react-native-text-ticker';

export default function PostSingleOverlay({item}) {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateValue]);

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  
  const handleUpdateLike = useMemo(() => throttle(500, true, () => {}), []);

  const numberLike = getRandomInt(10, 1000);
  const numberShare = getRandomInt(10, 1000);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={AppStyles.displayName}>{item?.user?.name}</Text>
        <Text
          style={[
            styles.description,
            {
              paddingBottom: 8,
            },
          ]}>
          {
            'Sau cơn mưa, Hạnh chơi đá, đá to đá nhỏ đua\nnhau làm cho Hạnh quên sầu 🥹'
          }
        </Text>
        <View style={{height: 30, justifyContent: 'flex-end'}}>
          <TextTicker
            style={{
              color: 'white',
              fontSize: 15,
              paddingTop: 4,
            }}
            duration={8000}
            loop
            bounce={false}
            repeatSpacer={70}
            marqueeDelay={1000}
            shouldAnimateTreshold={40}>
            I Don’t Care - Ed Sheeran Part Justin Bieber
          </TextTicker>
        </View>
      </View>

      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.avatar}
            source={{
              uri: item?.image,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleUpdateLike}>
          <AppAssets.ic_heart width={40} height={40} />
          <Text style={AppStyles.featureStyle}>{numberLike}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
          <AppAssets.ic_message width={40} height={40} />

          <Text style={AppStyles.featureStyle}>{numberShare}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
          <AppAssets.ic_share width={40} height={40} />

          <Text style={AppStyles.featureStyle}>Share</Text>
        </TouchableOpacity>

        <Animated.View
          style={[
            styles.actionButton,
            {
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              width: 50,
              height: 50,
              transform: [{rotate: spin}],
            },
          ]}>
          <AppAssets.IC_DISC
            width={50}
            height={50}
            style={{
              position: 'absolute',
            }}
          />

          <Image
            source={AppAssets.IMG_HANH_01}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              borderRadius: 20,
            }}
          />
        </Animated.View>
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
