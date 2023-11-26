import {useWindowDimensions} from 'react-native';

interface IUseDimension {
  w: number;
  h: number;
}

const LANDSCAPE_RECTANGLE = 9 / 16;
const PORTRAIT_RECTANGLE = 16 / 9;

const useDimension = (props: IUseDimension) => {
  const {width, height} = useWindowDimensions();
  const {w, h} = props;

  const isLandscape = w > h;

  const videoWidth = width;
  const videoHeight = isLandscape
    ? width * LANDSCAPE_RECTANGLE
    : width * PORTRAIT_RECTANGLE;

  return {
    deviceWidth: width,
    deviceHeigh: height,
    videoWidth,
    videoHeight,
  };
};

export {useDimension};
