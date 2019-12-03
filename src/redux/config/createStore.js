import { applyMiddleware, createStore, compose } from 'redux';
import reducers from '../reducers/index';
import logger from 'redux-logger';
import rootLogic from './logic';
import { createLogicMiddleware } from 'redux-logic';

let composeEnhancers = compose;
let preloadedState = {};

const logicMiddleware = createLogicMiddleware(rootLogic);

if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  preloadedState = window.INITIAL_STATE || {};
  delete window.INITIAL_STATE;
}

// const rootReducer = combineReducers(reducers);
export default createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      logicMiddleware,
      logger
      //createLogger( true ),
    )
  )
);
