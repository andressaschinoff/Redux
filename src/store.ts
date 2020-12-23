import { createStore } from 'redux';
import { Reducers } from './reducer/Reducer';

export const store = createStore(Reducers);