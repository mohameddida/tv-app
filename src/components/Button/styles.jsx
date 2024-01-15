import {StyleSheet} from 'react-native';

const createStyles = ({hasFocus}) => {
  const container = {
    backgroundColor: 'rgba(36, 163, 255, 1)',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    borderColor: 'transparent',
  };
  if (hasFocus) {
    container.borderColor = '#24A3FF';
  }

  return StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 18,
    },
    container,
  });
};

export default createStyles;
