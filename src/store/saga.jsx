import {all, fork} from 'redux-saga/effects';

const sagas = [];

const saga = function* () {
  yield all(sagas.map(fork));
};

export default saga;
