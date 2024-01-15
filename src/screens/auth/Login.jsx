import React, {memo, useState} from 'react';
import {Image, ImageBackground, Text, TextInput, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Bg from '../../assets/images/dazn.png';
import logo from '../../assets/logo/logo.png';
import {Touchable, useTouchable} from '../../components/Touchable';
import useComputedStyles from '../../hooks/useComputedStyles';
import createStyles from './styles';
const Login = () => {
  const [accessCode, setAccessCode] = React.useState('');
  const {hasFocus} = useTouchable();

  const styles = useComputedStyles(createStyles, {hasFocus});
  const {navigate} = useNavigation();
  const handleLogin = () => {
    navigate('Home');
    console.log('Access Code:', accessCode);
  };
  const [test, setTest] = useState('');
  return (
    <ImageBackground source={Bg} style={styles.backgroundImage}>
      <View style={styles.containerBody}>
        <View style={styles.form}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.inputForm}>
            <Text style={styles.label}>Access code</Text>

            <TextInput
              value={accessCode}
              onChangeText={text => setAccessCode(text)}
              placeholder="Enter Access Code"
              placeholderTextColor="#FFFFFF"
              style={[styles.input, styles.touchableTextInput]}
            />

            <Text style={styles.label}>{test}</Text>
            <Touchable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </Touchable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default memo(Login);
