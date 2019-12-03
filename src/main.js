import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import { LOGIN_SUCCESS } from './redux/actions/userSessionActions';
import store from './redux/config/createStore';

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
