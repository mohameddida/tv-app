import React, {memo} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {StyleSheet} from 'react-native';

const FastImageBackground = ({source, style, children}) => {
  return (
    <View style={[styles.container, style]}>
      {!!source && <FastImage source={source} style={styles.image} />}
      {children || null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default memo(FastImageBackground);
