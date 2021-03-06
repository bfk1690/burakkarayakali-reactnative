import {Dimensions, Platform, StatusBar} from 'react-native';

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 48 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export {getBottomSpace, getStatusBarHeight, ifIphoneX, isIphoneX};
