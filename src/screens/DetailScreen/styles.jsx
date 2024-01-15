import {Platform, StyleSheet} from 'react-native';
import {size} from '../../styles/utils';

const styles = StyleSheet.create({
  container: Platform.isTV
    ? {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: -size(50),
        padding: size(50),
      }
    : {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
});

export default styles;
