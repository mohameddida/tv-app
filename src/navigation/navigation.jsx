import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform} from 'react-native';
import EventsScreen from '../screens/DetailScreen/EventsScreen';
import EventsDetailsScreen from '../screens/EventsDetails/EventsDetailsScreen';
import Home from '../screens/Home/index';
import Player from '../screens/Video';
import Login from '../screens/auth/Login';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        orientation: Platform.isTV ? 'landscape' : 'portrait',
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#FFF',
        },
        headerStyle: {
          backgroundColor: '#282c34',
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name={'login'}
        component={Login}
        options={{
          title: 'login',
          headerShown: !Platform.isTV,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{
          title: 'Home',
          headerShown: !Platform.isTV,
          animation: 'fade',
        }}
      />

      <Stack.Screen
        name={'packages'}
        component={Home}
        options={{
          title: 'packages',
          headerShown: !Platform.isTV,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="Details"
        component={EventsDetailsScreen}
        options={{
          title: 'Details',
          headerShown: !Platform.isTV,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="EventsDetails"
        component={EventsScreen}
        options={{
          title: 'EventsDetails',
          headerShown: !Platform.isTV,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{
          title: 'Play',
          headerShown: !Platform.isTV,
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
