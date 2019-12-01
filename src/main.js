import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Loadable from 'react-loadable';
import reduxThunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import rootReducer from './data/reducers';
import logger from 'redux-logger';
import { LOGIN_SUCCESS } from './data/actions/type';

const axiosInstance = axios.create({
  baseURL: '/api/'
});

const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  applyMiddleware(reduxThunk.withExtraArgument(axiosInstance), logger)
);

let userData = localStorage.getItem('user');

if (userData != null) {
  userData = JSON.parse(userData);
  store.dispatch({
    type: LOGIN_SUCCESS,
    payload: userData
  });
}

export const main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
};
