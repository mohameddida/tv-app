import {Platform, StyleSheet} from 'react-native';
import {size} from '../../styles/utils';

const CreateStyles = props => {
  const {bottom} = props;

  return StyleSheet.create({
    container: {
      paddingTop: size(8),
      paddingBottom: bottom,
      ...Platform.select({
        android: {
          paddingBottom: bottom + size(12),
        },
      }),
    },
  });
};

export default CreateStyles;
