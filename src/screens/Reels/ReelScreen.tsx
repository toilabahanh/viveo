import {View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PostItem from './PostItem';
import {getPopularVideo} from '../../services/VideoServices';
import {VideoResource} from '../../services/types';
import {reelStyles} from './styles';

const ReelScreen = () => {
  const insets = useSafeAreaInsets();

  const [data, setData] = useState<Array<VideoResource>>([]);

  const getData = useCallback(async () => {
    try {
      const response = await getPopularVideo(5);
      const responseData = response.data;
      console.log('responseData: ', responseData);

      setData(prevData => [...prevData, ...responseData.videos]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const Separator = useCallback(() => {
    return <View style={reelStyles.separator} />;
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
      estimatedItemSize={200}
      ItemSeparatorComponent={Separator}
      contentInset={insets}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ReelScreen;
