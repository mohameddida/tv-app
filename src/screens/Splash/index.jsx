import React, {memo} from 'react';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import Bg from '../../assets/images/dazn.png';
import {size} from '../../styles';
const SplashScreen = () => (
  <>
    <ImageBackground source={Bg} style={stylesSplash.backgroundImage}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={stylesSplash.container}>
        <View style={stylesSplash.content}>
          <FastImage
            source={require('../../assets/logo/logo.png')}
            style={stylesSplash.logo}
          />
          {/* <ActivityIndicator
            style={stylesSplash.loader}
            color={stylesSplash.loader.color}
            size="large"
          /> */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  </>
);

export default memo(SplashScreen);
const stylesSplash = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundImage: 'url("../../assets/images/formula.png")',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: size(553),
    aspectRatio: 533 / 463,
  },
});
