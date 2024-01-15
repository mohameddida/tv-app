import {StyleSheet} from 'react-native';
import {Device} from 'react-native-device-select';

const createStyles = ({height, headerHeight, top, bottom}) => {
  const content = {minHeight: height - headerHeight};
  if (Device.isMobile && Device.isAndroid) {
    content.minHeight = height - (headerHeight - top - bottom);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
    },
    content,
  });

  return styles;
};

export default createStyles;
