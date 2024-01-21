import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useState} from 'react';
import {Image, ImageBackground, TouchableHighlight, View} from 'react-native';
import bgCard from '../../../assets/images/bgCard.webp';
import {useTouchable, withTouchable} from '../../Touchable';
import CreateStyles from './styles';

const CardEvent = ({images, event, idEvent}) => {
  const {hasFocus, setRef} = useTouchable();

  const [focus, setFocus] = useState(false);
  const {navigate, isTV} = useNavigation();
  const onFocus = useCallback(() => {
    if (isTV) {
      setFocus(true);
      setRef.current?.focus(); // Manually set focus on the TouchableHighlight
    } else {
      navigate('EventsDetails', {
        idEvent: idEvent,
        name: event.name,
      });
      setFocus(true);
    }
  }, [idEvent, navigate, event, isTV, setRef]);
  const onPress = useCallback(() => {
    if (!isTV) {
      navigate('Player', {
        idPack: idEvent,
        name: event.name,
      });
    }
  }, [idEvent, navigate, event, isTV]);
  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);
  const styles = CreateStyles(hasFocus);
  return (
    <TouchableHighlight
      onFocus={onFocus}
      onPress={onPress}
      onBlur={onBlur}
      key={idEvent}
      ref={setRef}>
      <ImageBackground source={bgCard} style={styles.container}>
        <View style={styles.content}>
          <Image
            source={images}
            style={[!focus ? styles.image : styles.imageShimmer]}
          />
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default memo(withTouchable(CardEvent));
