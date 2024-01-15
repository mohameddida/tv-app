import React, {memo} from 'react';
import useComputedStyles from '../../../hooks/useComputedStyles.jsx';
import {useTouchable, withTouchable} from '../../Touchable';

import {Touchable} from '../Touchable/component.jsx';
import CreateStyles from './styles';
import { TextInput } from 'react-native';

const InputLogin = ({images}) => {
  const {hasFocus} = useTouchable();
  const styles = useComputedStyles(CreateStyles, {
    hasFocus,
  });
  const [accessCode, setAccessCode] = React.useState('');
  return (
    <Touchable
      onPress={() => {
        setTest('test');
      }}>
      <TextInput
        value={accessCode}
        onChangeText={text => setAccessCode(text)}
        placeholder="Enter Access Code"
        placeholderTextColor="#FFFFFF"
        style={[styles.input, styles.touchableTextInput]}
      />
    </Touchable>
  );
};

export default memo(withTouchable(InputLogin));
