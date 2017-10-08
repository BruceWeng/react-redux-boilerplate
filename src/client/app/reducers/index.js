import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';

const rootReducer = combineReducers({
  // Pass in all reducers
  counter: counterReducer,
});

export default rootReducer;
