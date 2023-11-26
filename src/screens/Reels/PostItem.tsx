import React, {memo} from 'react';
import {useDimension} from '../../hooks/useDimension';
import {Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import Video from 'react-native-video';
import {VideoResource} from '../../services/types';
import {postStyles, utilStyles} from './styles';

interface IPostItem {
  index: number;
  data: VideoResource;
}

const PostItem = (props: IPostItem) => {
  const {index, data} = props;
  const {videoWidth, videoHeight, deviceWidth, deviceHeigh} = useDimension({
    w: data.width,
    h: data.height,
  });

  return (
    <View key={data.id} style={postStyles.container}>
      <View style={{...utilStyles.row, ...utilStyles.centerContent}}>
        <View style={utilStyles.row}>
          <Avatar uri={data.image} />
          <View>
            <View style={utilStyles.row}>
              <Text>Title </Text>
              <Text>Follow</Text>
            </View>
            <View style={utilStyles.row}>
              <Text>Time </Text>
              <Text>ic_global</Text>
            </View>
          </View>
        </View>
        <View style={utilStyles.row}>
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
          uri: data.video_files[0].link,
          isNetwork: true,
        }}
        repeat
        disableFocus
        muted
        style={{
          width: deviceWidth,
          height: deviceHeigh,
        }}
        debug={{
          enable: true,
          thread: true,
        }}
      />
      <View style={{...utilStyles.row, ...postStyles.actionContainer}}>
        <View style={utilStyles.row}>
          <Text>ic_like</Text>
          <Text>123K</Text>
        </View>
        <View style={utilStyles.row}>
          <Text>1.1K comments</Text>
          <Text>290 shares</Text>
          <Text>3.3M views</Text>
        </View>
      </View>
      <View style={utilStyles.divide} />
      <View style={utilStyles.row}>
        <Text>Like</Text>
        <Text>Comment</Text>
        <Text>Share</Text>
      </View>
    </View>
  );
};

export default memo(PostItem);
