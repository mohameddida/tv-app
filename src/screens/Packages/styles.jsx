import {StyleSheet} from 'react-native';
import {Device} from 'react-native-device-select';
import {PADDING, size} from '../../styles';

const CreateStyles = ({height, headerHeight, top, bottom, hasFocus}) => {
  const content = {
    minHeight: height - headerHeight,
  };

  if (Device.isMobile && Device.isAndroid) {
    content.minHeight = height - (headerHeight - top - bottom);
  }

  const focusedButton = {
    flex: 1,
    width: hasFocus ? '110%' : '100%', // Increase width when focused
    height: hasFocus ? '110%' : '100%', // Increase height when focused
    backgroundColor: 'white',
    borderWidth: hasFocus ? 2 : 0, // Add border when focused
    borderColor: hasFocus ? 'blue' : 'transparent', // Set border color when focused
  };

  return StyleSheet.create({
    focusedButton,
    container: {
      flex: 1,
      marginTop: size(18),
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },

    flatList: {
      paddingHorizontal: PADDING.HORIZONTAL,
      marginHorizontal: -size(2),
      marginVertical: size(8),
    },
    content,
  });
};

export default CreateStyles;
