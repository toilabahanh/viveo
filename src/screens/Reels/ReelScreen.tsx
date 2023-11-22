import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

const Avatar = () => {
  const SIZE = 40;
  return (
    <View
      style={{
        backgroundColor: '#f48',
        width: SIZE,
        height: SIZE,
        borderRadius: 100,
      }}
    />
  );
};

const Item = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Avatar />
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
      <Text numberOfLines={2}>Content 2 line</Text>
      <View style={{height: 250, backgroundColor: '#f93'}}>
        <Text>Video</Text>
      </View>
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
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const {width} = useWindowDimensions();

  const renderItem = ({item, index}) => {
    return <Item />;
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
      estimatedListSize={{height: DATA.length * 300, width}}
      ItemSeparatorComponent={() => (
        <View style={{height: 20, backgroundColor: '#f05'}} />
      )}
      onBlankArea={e => {
        console.log('e: ', e);
      }}
      onScroll={e => {
        console.log('e: ', e.nativeEvent);
      }}>
      <Text>ReelScreen</Text>
    </FlashList>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({});
