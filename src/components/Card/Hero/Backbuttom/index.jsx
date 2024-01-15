import React, {memo} from 'react';
import {Text, View} from 'react-native';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import {useComputedStyles} from '../../../../hooks/useComputedStyles';
import {useTouchable, withTouchable} from '../../../Touchable';

import createStyles from './styles';

const BackButton = () => {
  const {hasFocus} = useTouchable();
  const styles = useComputedStyles(createStyles, {hasFocus});

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>
          <FA5 name="arrow-left" size={styles.text.fontSize} />
        </Text>
      </View>
    </View>
  );
};

export default memo(withTouchable(BackButton));
