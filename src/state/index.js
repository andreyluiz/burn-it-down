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
  optimal: [],
  remaining: [],
  realized: [],
};

const reducer = duck.createReducer({
  [SUBMIT_DATA]: (state, { payload }) => {
    const { days } = payload;
    const { points } = payload;
    const base = new Array(days).fill(0);
    let optimalPoints = points;
    const pointsPerDay = points / days;
    return {
      ...state,
      optimal: base.reduce((optimal) => {
        optimalPoints -= pointsPerDay;
        return [
          ...optimal,
          optimalPoints,
        ];
      }, [points]),
      remaining: base.reduce(remaining => ([
        ...remaining,
        points,
      ]), [points]),
      realized: base,
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
        return (index === day) ? (value + points) : value;
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
