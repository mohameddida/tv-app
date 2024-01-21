import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import ms from 'ms';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {withSafeAreaContext} from './src/Configuration';
import {Navigations} from './src/navigation';
import Splash from './src/screens/Splash';

// if (Config.DISABLE_YELLOW_BOX === 'true') {
//   LogBox.ignoreAllLogs();
// }
const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, ms('2 seconds'));

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: styles.container,
            },
          }}>
          {!isReady ? <Splash /> : <Navigations />}
        </NavigationContainer>
        {/* <TouchableOpacity style={{backgroundColor: 'white'}}>
          <Text>test</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#20232a',
  },
});

export default withSafeAreaContext(App);
