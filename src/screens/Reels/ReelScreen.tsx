import {Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PostItem from './PostItem';
import {getPopularVideo} from '../../services/VideoServices';
import {PopularVideoResponse, VideoResource} from '../../services/types';
import {postStyles, reelStyles} from './styles';
import {APIService} from '../../services/ApiServices';

const ReelScreen = () => {
  const insets = useSafeAreaInsets();

  const [screenState, setScreenState] = useState<PopularVideoResponse>({
    videos: [],
    url: '',
    page: 1,
    per_page: 15,
    total_results: 5,
    prev_page: '',
    next_page: '',
  });
  const [data, setData] = useState<Array<VideoResource>>([]);

  const getData = useCallback(async () => {
    try {
      const response = await getPopularVideo(screenState.per_page);
      const responseData = response.data;
      setData(prevData => [...prevData, ...responseData.videos]);
      setScreenState(responseData);
    } catch (error) {
      console.log(error);
    }
  }, [screenState.per_page]);

  const handleLoadMore = async () => {
    if (!screenState?.next_page) {
      return;
    }

    try {
      const response = await APIService().get(screenState.next_page);
      const responseData = response.data;
      setData(prevData => [...prevData, ...responseData.videos]);
      setScreenState(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  const Separator = useCallback(() => {
    return <View style={reelStyles.separator} />;
  }, []);

  const Empty = useCallback(() => {
    return (
      <View>
        <Text>Empty</Text>
      </View>
    );
  }, []);

  const renderItem = (info: ListRenderItemInfo<VideoResource>) => {
    const {index, item} = info;
    return <PostItem data={item} index={index} />;
  };

  return (
    <FlashList<VideoResource>
      key={'reels'}
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => `reels-${index.toString()}`}
      bounces
      bouncesZoom
      estimatedItemSize={screenState?.total_results}
      ItemSeparatorComponent={Separator}
      ListEmptyComponent={Empty}
      ListFooterComponent={() => <View style={postStyles.container} />}
      contentInset={insets}
      showsVerticalScrollIndicator={false}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      removeClippedSubviews
      onViewableItemsChanged={e => {
        console.log(
          '😖',
          e.changed.map(item => item.key),
        );
      }}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 50,
        waitForInteraction: true,
      }}
    />
  );
};

export default ReelScreen;
