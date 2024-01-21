import {StyleSheet} from 'react-native';
import {PADDING, size} from '../../styles';

const CreateStyles = ({hasFocus}) => {
  const container = {
    flex: 1,
    marginTop: size(18),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    bottom: 0,
    position: 'absolute',
    right: 0,
    left: 0,
  };
  const flatList = {
    // paddingHorizontal: PADDING.HORIZONTAL,
    marginHorizontal: -size(2),
    marginVertical: size(8),
  };
  const card = {
    flex: 1,
  };

  if (hasFocus) {
  }
  return StyleSheet.create({
    container,
    flatList,
    card,
  });
};

export default CreateStyles;
