import {configureStore} from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (__DEV__) {
  middleware.push(require('redux-flipper').default());
}

const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(saga);

export const useDispatch = () => useReduxDispatch();
export const useSelector = useReduxSelector;
export default store;
