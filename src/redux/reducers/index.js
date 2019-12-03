import { combineReducers } from 'redux';
import userSessionReducers from './userSessionReducers';

const rootReducer = combineReducers({
  userSession: userSessionReducers
});

export default rootReducer;
