import { createDuck } from 'redux-duck';

const duck = createDuck('root', 'burn-it-down');

const SUBMIT_DATA = duck.defineType('SUBMIT_DATA');

export const submitData = duck.createAction(SUBMIT_DATA);

export const reducer = duck.createReducer({
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
});
