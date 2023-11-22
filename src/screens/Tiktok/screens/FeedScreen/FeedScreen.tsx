import { View, Dimensions, FlatList, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { FeedScreenStyles } from './style';
import PostSingle from '../../components/PostSingle/PostSingle';
import { FlashList } from '@shopify/flash-list';

export default function FeedScreen() {
  const [posts, setPosts] = useState([1, 2, 3, 2, 1, 2, 23]);

  useEffect(() => {

  }, []);

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach(element => {
      // const cell = mediaRefs.current[element.key];
      // if (cell) {
      //   if (element.isViewable) {
      //     if (!profile) {
      //       setCurrentUserProfileItemInView(element.item.creator);
      //     }
      //     cell.play();
      //   } else {
      //     cell.stop();
      //   }
      // }
    });
  });

  const feedItemHeight = Dimensions.get('window').height;

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          height: feedItemHeight,
          backgroundColor: 'black',
          width: '100%',
        }}>
        <PostSingle />
      </View>
    );
  };

  return (
    <View style={FeedScreenStyles.container}>
      <FlashList
        bounces={false}
        data={posts}
        estimatedItemSize={200}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 0,
          minimumViewTime: 10000,
          viewAreaCoveragePercentThreshold: 60,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        // decelerationRate={'normal'}
        // onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
}
