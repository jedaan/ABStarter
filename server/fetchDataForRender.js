import React from 'react';
import ssrPrepass from 'react-ssr-prepass';
import chalk from 'chalk';
import store from '../src/redux/config/createStore';

export const fetchDataForRender = (ServerApp, req) => {
  let data = {};
  let reduxStore = store;
  return ssrPrepass(
    <ServerApp req={req} store={reduxStore} location={req.url} />,
    element => {}
  ).then(() => {
    return store;
  });
};
