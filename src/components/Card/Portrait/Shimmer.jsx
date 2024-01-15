import React, {memo} from 'react';
import {Image, View} from 'react-native';
import useComputedStyles from '../../../hooks/useComputedStyles.jsx';
import {useTouchable, withTouchable} from '../../Touchable';

import CreateStyles from './styles';

const PortraitCardShimmer = ({images}) => {
  const {hasFocus} = useTouchable();
  const styles = useComputedStyles(CreateStyles, {
    hasFocus,
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={images}
          style={[styles.image, styles.imageShimmerContainer]}
        />
      </View>
    </View>
  );
};

export default memo(withTouchable(PortraitCardShimmer));
