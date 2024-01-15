import React, {forwardRef} from 'react';
import {Touchable} from './component';

export const withTouchable = Component => {
  const ComponentWithTouchable = forwardRef((props, ref) => {
    return (
      <Touchable {...props} ref={ref}>
        <Component {...props} />
      </Touchable>
    );
  });

  return ComponentWithTouchable;
};
