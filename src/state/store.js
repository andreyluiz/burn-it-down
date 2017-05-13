import { createStore } from 'redux';
import Vue from 'vue';
import Revue from 'revue';
import { submitData, reducer } from '.';

const actions = { submitData };

const reduxStore = createStore(reducer);

const store = new Revue(Vue, reduxStore, actions);

export default store;
