import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {useComputedStyles} from '../../hooks';
import {Touchable, useTouchable} from '../Touchable';
import createStyles from './styles';

const ButtonLogin = () => {
  const navigate = useNavigation();
  const {hasFocus} = useTouchable();
  const styles = useComputedStyles(createStyles, {hasFocus});

  const handlePress = () => {
    navigate('Home');
  };

  return (
    <Touchable onPress={handlePress}>
      <View style={[styles.container, styles.button]}>
        <Text style={styles.text}>Login</Text>
      </View>
    </Touchable>
  );
};

export default memo(ButtonLogin);
