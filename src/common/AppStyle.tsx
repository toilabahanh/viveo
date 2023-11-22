import {StyleSheet} from 'react-native';
import {AppTiktokColors} from './AppColors';

export const AppStyles = StyleSheet.create({
  titleStyle: {
    color: AppTiktokColors.GREY_DARK,
    fontSize: 13,
  },
  featureStyle: {
    color: AppTiktokColors.WHITE,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  displayName: {
    color: AppTiktokColors.WHITE,
    fontWeight: '700',
    fontSize: 17,
  },
  textInput: {
    borderColor: AppTiktokColors.GREY_LIGHT,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 5,
  },
  avatarSmall: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  grayOutlinedButton: {
    borderColor: AppTiktokColors.GREY_LIGHT,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  grayOutlinedIconButton: {
    borderColor: AppTiktokColors.GREY_LIGHT,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  filledButton: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: AppTiktokColors.RED,
  },
  filledButtonText: {
    color: AppTiktokColors.WHITE,
    fontWeight: '700',
  },
  grayOutlinedButtonText: {
    color: AppTiktokColors.BLACK,
    fontWeight: '700',
  },
});
