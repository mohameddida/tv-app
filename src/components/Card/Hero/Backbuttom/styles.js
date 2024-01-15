import {StyleSheet} from 'react-native';
import {size} from '../../../../styles/utils';

const createStyles = ({hasFocus}) => {
  const button = {
    borderColor: 'transparent',
    borderWidth: size(2),
    width: size(36),
    height: size(36),
    borderRadius: size(18),
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const text = {
    fontSize: size(16),
    color: '#FFF',
  };

  if (hasFocus) {
    button.borderColor = '#fff';
  }

  return StyleSheet.create({
    container: {
      paddingTop: size(20),
    },
    button,
    text,
  });
};

export default createStyles;
