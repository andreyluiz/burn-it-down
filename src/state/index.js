import Vue from 'vue';
import Revue from 'revue';
import { createDuck } from 'redux-duck';
import { createStore } from 'redux';

const duck = createDuck('root', 'burn-it-down');

const SUBMIT_DATA = duck.defineType('SUBMIT_DATA');

export const submitData = duck.createAction(SUBMIT_DATA);

const initialState = {
  optimal: [],
  realized: [],
};

const reducer = duck.createReducer({
  [SUBMIT_DATA]: (state, { payload }) => {
    const { days } = payload;
    const { points } = payload;
    let optimalPoints = points;
    const pointsPerDay = points / days;
    const optimal = [points];
    const realized = [points];
    while (optimalPoints > 0) {
      optimalPoints -= pointsPerDay;
      optimal.push(optimalPoints);
      realized.push(points);
    }
    return {
      ...state,
      optimal,
      realized,
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
