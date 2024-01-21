import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useState} from 'react';
import {Image, TouchableHighlight, View} from 'react-native';

import useComputedStyles from '../../../hooks/useComputedStyles.jsx';
import {useTouchable, withTouchable} from '../../Touchable';
import CreateStyles from './styles';

const PortraitCardShimmer = ({namePack, images, idPack}) => {
  const {hasFocus} = useTouchable();

  const [focus, setFocus] = useState(false);
  const {navigate} = useNavigation();
  const onFocus = useCallback(() => {
    navigate('Home', {id: idPack});

    setFocus(true);
  }, [navigate, idPack]);
  const onPress = useCallback(() => {
    navigate('EventsDetails', {
      idPack: idPack,
      name: namePack,
    });
  }, [idPack, navigate, namePack]);
  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const styles = useComputedStyles(CreateStyles, {
    hasFocus,
  });
  return (
    <TouchableHighlight
      onFocus={onFocus}
      onPress={onPress}
      onBlur={onBlur}
      activeOpacity={1}
      key={idPack}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={images}
            style={[styles.image, focus ? styles.imageShimmerContainer : null]}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default memo(withTouchable(PortraitCardShimmer));
