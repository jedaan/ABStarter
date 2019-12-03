import React from 'react';
import ssrPrepass from 'react-ssr-prepass';
import chalk from 'chalk';
import store from '../src/redux/config/createStore';

export const fetchDataForRender = (ServerApp, req) => {
  let data = {};
  let reduxStore = store;
  return ssrPrepass(
    <ServerApp req={req} store={reduxStore} location={req.url} />,
    element => {
      if (element && element.type && element.type.fetchData) {
        return element.type.fetchData(req).then(d => {
          Object.keys(d).forEach(key => {
            if (data[key]) {
              logDuplicateKeyMessage(key, element.type.name);
            }
          });

          data = {
            ...data,
            ...d
          };
        });
      }
    }
  ).then(() => {
    return store;
  });
};

function logDuplicateKeyMessage(key, component) {
  /* eslint-disable no-console */
  console.log('');
  console.log(
    chalk.red(
      `Warning: <${component} /> is overwriting an existing server data value for "${key}".`
    )
  );
  console.log(chalk.red('This can cause unexpected behavior.'));
  console.log('');
}
