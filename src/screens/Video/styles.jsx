import {StyleSheet} from 'react-native';
import {size} from '../../styles';

const styles = StyleSheet.create({
  container: {flex: 1},
  events: {
    bottom: 0,
    position: 'absolute',
    zIndex: 100,
    right: 0,
    left: 0,
  },
  mask: {flex: 1},
  image: {flex: 1, resizeMode: 'cover'},
  gradient: {flex: 1},
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderIndicator: {
    marginBottom: size(12),
    color: 'rgba(255, 255, 255, 0.7)',
  },
  loaderText: {
    color: '#fff',
    fontSize: size(11),
    fontWeight: '600',
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    backgroundColor: '#000',
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
