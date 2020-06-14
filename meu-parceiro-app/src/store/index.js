import { createStore } from 'react-hooks-global-state';

import types from './types';

const initialState = {
  logged: false,
  number: '',
  eixo: 2,
  origin: '',
  destination: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_LOGGED: return { ...state, logged: action.payload };
    case types.SET_PHONE: return { ...state, number: action.payload };
    case types.SET_EIXO: return { ...state, eixo: action.payload };
    case types.SET_ORIGIN: return { ...state, origin: action.payload };
    case types.SET_DESTINATION: return { ...state, destination: action.payload };
    default: return state;
  }
};

export const { dispatch, useGlobalState } = createStore(reducer, initialState);
