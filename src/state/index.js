import Vue from 'vue';
import Revue from 'revue';
import { createDuck } from 'redux-duck';
import { createStore } from 'redux';
import { throttle, omit } from 'lodash';
import { loadState, saveState } from './localStorage';

const duck = createDuck('root', 'burn-it-down');

const SUBMIT_DATA = duck.defineType('SUBMIT_DATA');
const SET_POINTS = duck.defineType('SET_POINTS');
const SET_SPRINT_NAME = duck.defineType('SET_SPRINT_NAME');
const NEW_SPRINT = duck.defineType('NEW_SPRINT');

export const submitData = duck.createAction(SUBMIT_DATA);
export const setPoints = duck.createAction(SET_POINTS);
export const setSprintName = duck.createAction(SET_SPRINT_NAME);
export const newSprint = duck.createAction(NEW_SPRINT);

const initialState = {
  history: {},
  id: '',
  name: '',
  optimal: [],
  remaining: [],
  realized: [],
};

const generateId = () => Math.random().toString(36).substring(5);

const reducer = duck.createReducer({
  [SUBMIT_DATA]: (state, { payload }) => {
    const { days } = payload;
    const { points } = payload;
    const base = new Array(days).fill(0);
    let optimalPoints = points;
    const pointsPerDay = points / days;
    return {
      ...state,
      id: generateId(),
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
      pointsPerDay,
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
  [SET_SPRINT_NAME]: (state, { payload }) => ({
    ...state,
    name: payload,
  }),
  [NEW_SPRINT]: state => ({
    ...initialState,
    history: {
      ...state.history,
      [state.id]: omit(state, 'history'),
    },
  }),
}, initialState);

const persistedState = loadState();

/* eslint-disable no-underscore-dangle */
const reduxStore = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

reduxStore.subscribe(throttle(() => {
  saveState(reduxStore.getState());
}, 1000));

export const store = new Revue(Vue, reduxStore);
