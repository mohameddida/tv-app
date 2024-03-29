import {StyleSheet} from 'react-native';
import {size} from '../../../styles';

const width = size(132);

const CreateStyles = ({hasFocus}) => {
  const content = {
    borderWidth: size(2),
    // borderColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
    overflow: 'hidden',
    // elevation: 3,
  };
  const container = {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 146,
    marginRight: size(12),
    top: 0,
    left: 0,
    right: 0,
  };

  if (hasFocus) {
    container.borderWidth = 5;
    container.borderColor = '#24A3FF';
    container.width = 200;
    container.height = 170;
  }

  return StyleSheet.create({
    container,
    content,

    image: {
      aspectRatio: 2 / 3,
      width: '100%',

      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'contain',
      backgroundColor: 'rgba(255, 255, 255, 0.075)',
    },
    imageShimmerContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    imageShimmer: {
      flex: 1,
      width: '100%',
      height: '100%',
      // borderColor: '#24A3FF',
      // borderWidth: 3,
    },
    info: {
      flex: 1,
      width: '100%',
    },
  });
};

export default CreateStyles;
