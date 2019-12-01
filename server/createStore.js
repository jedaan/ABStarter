import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from '../src/data/reducers';
import logger from 'redux-logger';

export default req => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:63835',
    headers: { cookie: req.get('cookie') || '' }
  });

  const initialState = {
    userSession: {}
  };

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk.withExtraArgument(axiosInstance), logger)
  );

  return store;
};
