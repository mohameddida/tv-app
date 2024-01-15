import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const withSafeAreaContext = Component => {
  const ComponentWithSafeAreaContext = props => {
    return (
      <SafeAreaProvider>
        <Component {...props} />
      </SafeAreaProvider>
    );
  };

  return ComponentWithSafeAreaContext;
};
