import {StyleSheet} from 'react-native';
import {PADDING, size} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: size(18),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    bottom: 0,
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 1000,
  },
  flatList: {
    paddingHorizontal: PADDING.HORIZONTAL,
    marginHorizontal: -size(2),
    marginVertical: size(8),
  },
});

export default styles;
