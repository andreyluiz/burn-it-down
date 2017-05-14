import Vue from 'vue';
import Revue from 'revue';
import { createDuck } from 'redux-duck';
import { createStore } from 'redux';

const duck = createDuck('root', 'burn-it-down');

const SUBMIT_DATA = duck.defineType('SUBMIT_DATA');

export const submitData = duck.createAction(SUBMIT_DATA);

const initialState = {
  optimal: [],
};

const reducer = duck.createReducer({
  [SUBMIT_DATA]: (state, { payload }) => {
    const { days } = payload;
    let { points } = payload;
    const pointsPerDay = points / days;
    const optimal = [points];
    while (points > 0) {
      points -= pointsPerDay;
      optimal.push(points);
    }
    return {
      ...state,
      optimal,
    };
  },
}, initialState);

/* eslint-disable no-underscore-dangle */
const reduxStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export const store = new Revue(Vue, reduxStore);
