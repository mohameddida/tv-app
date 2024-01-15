import {Platform, StyleSheet} from 'react-native';
import {size} from '../../../styles/utils';

const styles = StyleSheet.create({
  container: Platform.isTV
    ? {
        margin: -size(50),
        padding: size(50),
        width: 250,
        height: 200,
        justifyContent: 'space-evenly',
        marginHorizontal: 2,
      }
    : {},
});

export default styles;
