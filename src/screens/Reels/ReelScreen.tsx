import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import {useDimension} from '../../hooks/useDimension';
import Avatar from '../../components/Avatar';

const DATA = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
];

const Item = ({data, index}) => {
  const {landscape, deviceWidth} = useDimension();

  return (
    <View key={index} style={{paddingVertical: 8}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Avatar uri="https://picsum.photos/500" />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>Title </Text>
              <Text>Follow</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Time </Text>
              <Text>ic_global</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>ic_menu</Text>
          <Text>ic_close</Text>
        </View>
      </View>
      <Text numberOfLines={2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere
        tempore explicabo sunt. Exercitationem omnis corporis ex odit quam atque
        laudantium id saepe repudiandae soluta, commodi cumque voluptatibus,
        eius aliquam.
      </Text>
      <Video
        key={`${index}-${Math.random()}`}
        source={{
          uri: data,
          isNetwork: true,
        }}
        style={{
          height: landscape.height,
          width: landscape.width,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>ic_like</Text>
          <Text>123K</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>1.1K comments</Text>
          <Text>290 shares</Text>
          <Text>3.3M views</Text>
        </View>
      </View>
      <View style={{borderTopWidth: 0.5, borderBottomWidth: 0.5}} />
      <View style={{flexDirection: 'row'}}>
        <Text>Like</Text>
        <Text>Comment</Text>
        <Text>Share</Text>
      </View>
    </View>
  );
};

const ReelScreen = () => {
  const {deviceWidth} = useDimension();
  const insets = useSafeAreaInsets();

  const renderItem = ({item, index}) => {
    return <Item data={item} index={index} />;
  };

  return (
    <FlashList
      key={'reels'}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(_, index) => `reels-${index.toString()}`}
      bounces
      bouncesZoom
      estimatedItemSize={200}
      // estimatedListSize={{height: DATA.length * 300, width: deviceWidth}}
      ItemSeparatorComponent={() => (
        <View style={{height: 20, backgroundColor: 'black'}} />
      )}
      onBlankArea={e => {
        console.log('e: ', e);
      }}
      contentInset={insets}
      showsVerticalScrollIndicator={false}>
      <Text>ReelScreen</Text>
    </FlashList>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({});
