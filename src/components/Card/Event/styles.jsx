import {StyleSheet} from 'react-native';
import {size} from '../../../styles';

const width = size(132);

const CreateStyles = ({hasFocus}) => {
  const content = {
    borderWidth: size(2),
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    overflow: 'hidden',
    elevation: 3,
    width: 157,
    margin: 10,
    height: 96,
    padding: 0,
  };
  const container = {
    // backgroundColor: 'rgba(128, 128, 128, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 157,
    marginRight: size(13),
    top: 0,
    left: 0,
    right: 0,
    padding: 0,
  };
  if (hasFocus) {
    // container.backgroundColor = 'rgba(128, 128, 128, 0.0)';
    // container.borderColor = '#24A3FF';
    // container.borderWidth = 2;
  }

  return StyleSheet.create({
    container,
    content,

    image: {
      // aspectRatio: 2 / 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'contain',
    },
    imageShimmer: {
      // aspectRatio: 2 / 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'contain',
    },
  });
};

export default CreateStyles;
