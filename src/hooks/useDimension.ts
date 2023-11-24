import {useWindowDimensions} from 'react-native';

// interface IUseDimension {
//   w: number;
//   h: number;
//   rectangle: number;
// }

const LANDSCAPE_RECTANGLE = 9 / 16;
const PORTRAIT_RECTANGLE = 16 / 9;

const useDimension = () => {
  const {width, height} = useWindowDimensions();

  const landscape = {
    width: width,
    height: width * LANDSCAPE_RECTANGLE,
  };

  const portrait = {
    width: width,
    height: width * PORTRAIT_RECTANGLE,
  };

  return {
    deviceWidth: width,
    deviceHeigh: height,
    landscape,
    portrait,
  };
};

export {useDimension};
