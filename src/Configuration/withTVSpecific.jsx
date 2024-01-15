import React from 'react';
import {Device} from 'react-native-device-select';

export const withTVSpecific = Component => {
  const TVSpecificComponent = props => {
    if (!Device.isTV) {
      return null;
    }

    return <Component {...props} />;
  };

  return TVSpecificComponent;
};
