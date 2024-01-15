import React from 'react';
import {Provider} from 'react-redux';

import store from './index.jsx';

const withStore = Component => {
  const ComponentWithStore = props => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };

  return ComponentWithStore;
};

export default {withStore};
