import {StyleSheet} from 'react-native';
import {AppReelsColors} from '../../common/AppColors';

const reelStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 4,
    backgroundColor: AppReelsColors.DARK_BLACK,
  },
});

const postStyles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  actionContainer: {
    justifyContent: 'space-between',
  },
});

const utilStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divide: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
});

export {reelStyles, postStyles, utilStyles};
