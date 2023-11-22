/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground, Pressable, Text} from 'react-native';
import {AppAssets} from '../../common/AppAssets';
import {AppTiktokColors} from '../../common/AppColors';
import {AppStyles} from '../../common/AppStyle';
import {SCREEN} from '../../navigation/enums';

export default function ChooseScreen() {
  const navigation = useNavigation();

  const goToTiktok = () => {
    navigation.navigate(SCREEN.TIKTOK_SCREEN);
  };

  const goToReel = () => {
    navigation.navigate(SCREEN.REEL_SCREEN);
  };

  return (
    <ImageBackground
      source={AppAssets.IMG_HANH_02}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 24,
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          marginBottom: 50,
          borderRadius: 4,
        }}
        source={AppAssets.IMG_HANH_01}
      />
      <Text
        style={{
          color: AppTiktokColors.WHITE,
          fontWeight: '700',
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '900',
            color: AppTiktokColors.HANH_DOG,
          }}>
          HẠNH
        </Text>{' '}
        CHỌN MÓN ĐI BẠN
      </Text>

      <ItemButton title="Đá Hầm Đu Đủ" onPress={goToTiktok} />
      <ItemButton title="Sương Mù Phương Đông" onPress={goToReel} />
    </ImageBackground>
  );
}

const ItemButton = ({title, onPress}: {title: string; onPress: () => void}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingVertical: 12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppTiktokColors.HANH_DOG,
        marginTop: 20,
      }}>
      <Text style={AppStyles.featureStyle}>{title}</Text>
    </Pressable>
  );
};
