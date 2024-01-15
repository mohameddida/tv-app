import React, {useCallback, useState} from 'react';
import {Platform, TouchableOpacity} from 'react-native';

import {TouchableContextProvider} from './context';

export const Touchable = React.forwardRef(
  ({onFocus, onBlur, children, ...props}, ref) => {
    const [hasFocus, setHasFocus] = useState(false);
    const onFocusProxy = useCallback(
      e => {
        setHasFocus(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const onBlurProxy = useCallback(
      e => {
        setHasFocus(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    return (
      <TouchableOpacity
        {...props}
        onFocus={onFocusProxy}
        onBlur={onBlurProxy}
        activeOpacity={props.activeOpacity || (Platform.isTV ? 1 : 0.7)}
        tvParallaxProperties={{enabled: false}}
        ref={ref}>
        <TouchableContextProvider hasFocus={hasFocus}>
          {children}
        </TouchableContextProvider>
      </TouchableOpacity>
    );
  },
);
