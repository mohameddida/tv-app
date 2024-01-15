import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {useComputedStyles} from '../../../../hooks/useComputedStyles';
import {useTouchable, withTouchable} from '../../../Touchable';

import createStyles from './styles';

const WatchTrailer = () => {
  const {hasFocus} = useTouchable();
  const styles = useComputedStyles(createStyles, {hasFocus});

  return (
    <View style={styles.button}>
      <Text style={styles.text}>Watch trailer</Text>
    </View>
  );
};

export default memo(withTouchable(WatchTrailer));
