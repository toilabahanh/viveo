import {View, Dimensions, FlatList, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {FeedScreenStyles} from './style';
import PostSingle from '../../components/PostSingle/PostSingle';
import {FlashList} from '@shopify/flash-list';
import {getPopularVideo} from '../../../../services/VideoServices';

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);
  const refPageApi = useRef(1);
  const mediaRefs = useRef([]);

  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const res = await getPopularVideo(10, refPageApi.current);
    if (refPageApi.current == 1) {
      setPosts(res.data.videos);
    } else {
      setPosts([...posts, ...res.data.videos]);
    }
    console.log('res.data.videosres.data.videos', posts);
  };

  const onViewableItemsChanged = useRef(({changed}) => {
    console.log('?????????');
    changed.forEach(element => {
      const cell = mediaRefs.current[element.key];
      if (cell) {
        if (element.isViewable) {
          cell?.play();
        } else {
          cell?.stop();
        }
      }
    });
  });

  const feedItemHeight = Dimensions.get('window').height;

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          height: feedItemHeight,
          backgroundColor: 'black',
          width: '100%',
        }}>
        <PostSingle
          ref={PostSingleRef => (mediaRefs.current[item.id] = PostSingleRef)}
          item={item}
          index={index}
        />
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
        // viewabilityConfig={{
        //   itemVisiblePercentThreshold: 0,
        //   minimumViewTime: 10000,
        //   viewAreaCoveragePercentThreshold: 60,
        // }}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={item => `item_video_${item.id}`}
        decelerationRate={'normal'}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
}
