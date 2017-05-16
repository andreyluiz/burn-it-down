import Vue from 'vue';
import Revue from 'revue';
import { createDuck } from 'redux-duck';
import { createStore } from 'redux';

const duck = createDuck('root', 'burn-it-down');

const SUBMIT_DATA = duck.defineType('SUBMIT_DATA');
const SET_POINTS = duck.defineType('SET_POINTS');

export const submitData = duck.createAction(SUBMIT_DATA);
export const setPoints = duck.createAction(SET_POINTS);

const initialState = {
  optimal: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0],
  remaining: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
  realized: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const reducer = duck.createReducer({
  [SUBMIT_DATA]: (state, { payload }) => {
    const { days } = payload;
    const { points } = payload;
    let optimalPoints = points;
    const pointsPerDay = points / days;
    const optimal = [points];
    const remaining = [points];
    const realized = [0];
    while (optimalPoints > 0) {
      optimalPoints -= pointsPerDay;
      optimal.push(optimalPoints);
      remaining.push(points);
      realized.push(0);
    }
    return {
      ...state,
      optimal,
      remaining,
      realized,
    };
  },
  [SET_POINTS]: (state, { payload }) => {
    const { day, points } = payload;
    const { remaining, realized } = state;
    return {
      ...state,
      remaining: remaining.map((value, index) => { // eslint-disable-line arrow-body-style
        return (index > day) ? (value - points) : value;
      }),
      realized: realized.map((value, index) => { // eslint-disable-line arrow-body-style
        return (index === day) ? points : value;
      }),
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
