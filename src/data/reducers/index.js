import { combineReducers } from 'redux';
import userSession from './user_session_reducer';

const rootReducer = combineReducers({
  userSession
});

export default rootReducer;
