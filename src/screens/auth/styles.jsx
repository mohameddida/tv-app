import {StyleSheet} from 'react-native';
import {size} from '../../styles';

const width = size(132);

const createStyles = ({hasFocus}) => {
  const content = {
    borderRadius: size(8),
    borderWidth: size(2),
    borderColor: 'transparent',
    overflow: 'hidden',
  };
  const input = {
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderWidth: 2,
    color: 'white',
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    fontSize: 18,
  };

  const touchableTextInput = {
    borderColor: '#24A3FF',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: 'white',
    fontSize: 18,
  };
  if (hasFocus) {
    // content.borderColor = '#24A3FF';
    touchableTextInput.borderColor = '#24A3FF';
    input.borderColor = '#24A3FF';
  }

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width,
      marginRight: size(12),
    },
    content,
    input,
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    containerBody: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '35%',
    },
    inputForm: {
      width: '100%',
      alignSelf: 'stretch',
    },
    logo: {
      width: 452,
      height: 137,
      marginBottom: 20,
      alignSelf: 'center',
    },

    touchableTextInput,
    button: {
      backgroundColor: 'rgba(36, 163, 255, 1)',
      padding: 15,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    label: {
      color: 'white',
      alignSelf: 'flex-start',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

export default createStyles;
