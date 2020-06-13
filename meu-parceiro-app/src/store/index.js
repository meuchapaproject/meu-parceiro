import { createStore } from 'react-hooks-global-state';

import types from './types';

const initialState = { logged: false, number: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_LOGGED: return { ...state, logged: action.payload };
    case types.SET_PHONE: return { ...state, number: action.payload };
    default: return state;
  }
};

export const { dispatch, useGlobalState } = createStore(reducer, initialState);
