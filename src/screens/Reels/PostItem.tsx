import React, {memo, useRef, useState} from 'react';
import {useDimension} from '../../hooks/useDimension';
import {Pressable, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import Video from 'react-native-video';
import {VideoResource} from '../../services/types';
import {postStyles, utilStyles} from './styles';
import FastImage from 'react-native-fast-image';
import {AppAssets} from '../../common/AppAssets';

interface IPostItem {
  index: number;
  data: VideoResource;
}

const ICON = [
  {
    id: 'like',
    title: 'like',
    icon: <AppAssets.ic_like width={32} height={32} />,
  },
  {
    id: 'love',
    title: 'love',
    icon: <AppAssets.ic_love width={32} height={32} />,
  },
  {
    id: 'care',
    title: 'care',
    icon: <AppAssets.ic_care width={32} height={32} />,
  },
  {
    id: 'haha',
    title: 'haha',
    icon: <AppAssets.ic_haha width={32} height={32} />,
  },
  {id: 'wow', title: 'wow', icon: <AppAssets.ic_wow width={32} height={32} />},
  {id: 'sad', title: 'sad', icon: <AppAssets.ic_sad width={32} height={32} />},
  {
    id: 'angry',
    title: 'angry',
    icon: <AppAssets.ic_angry width={32} height={32} />,
  },
];

const PostItem = (props: IPostItem) => {
  const {index, data} = props;
  const {videoWidth, videoHeight, deviceWidth, deviceHeigh} = useDimension({
    w: data.width,
    h: data.height,
  });
  const [videoState, setVideoState] = useState('loading');
  const [icon, setIcon] = useState();
  const [showMoreIcon, setShowMoreIcon] = useState();

  return (
    <View key={data.id} style={postStyles.container}>
      <View
        style={{
          ...utilStyles.row,
          ...postStyles.actionContainer,
          paddingHorizontal: 20,
        }}>
        <View style={utilStyles.row}>
          <Avatar uri={data.image} />
          <View style={{marginLeft: 16}}>
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
      {Math.random() >= 0.5 ? (
        <Text
          numberOfLines={2}
          style={{paddingHorizontal: 20, marginVertical: 8}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere
          tempore explicabo sunt. Exercitationem omnis corporis ex odit quam
          atque laudantium id saepe repudiandae soluta, commodi cumque
          voluptatibus, eius aliquam.
        </Text>
      ) : undefined}
      <View>
        <FastImage
          source={{uri: data.image}}
          style={{
            width: videoWidth,
            height: videoHeight,
            display: videoState === 'loading' ? 'flex' : 'none',
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <Video
          key={`${index}-${Math.random()}`}
          source={{
            uri: data.video_files[0].link,
            isNetwork: true,
          }}
          onReadyForDisplay={() => {
            setVideoState('ready');
          }}
          repeat
          disableFocus
          style={{
            width: videoWidth,
            height: videoHeight,
          }}
          debug={{
            enable: true,
            thread: true,
          }}
        />
      </View>
      <View
        style={{
          ...utilStyles.row,
          ...postStyles.actionContainer,
          height: 64,
          alignItems: 'center',
        }}>
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
      <View
        style={{
          ...utilStyles.row,
          justifyContent: 'space-between',
          height: 48,
        }}>
        <Pressable
          onLongPress={() => setShowMoreIcon(true)}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {showMoreIcon && (
            <View
              style={{
                zIndex: 2,
                position: 'absolute',
                top: -25,
                flexDirection: 'row',
                backgroundColor: 'white',
                left: 10,
              }}>
              {ICON.map(item => (
                <View key={item.id}>{item.icon}</View>
              ))}
            </View>
          )}
          <Text>Like</Text>
        </Pressable>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Comment</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
