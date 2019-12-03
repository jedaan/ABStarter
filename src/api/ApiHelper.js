// import axios from 'axios';
// // import { logoutUser } from '../actions/users';
// import _ from 'lodash';
// import I18n from 'i18n-js';
// // import history from '../history';

// // the API_URL variable is defined by webpack
// // the replace will remove the last slash if it exists
// const ROOT_URL = API_URL.replace(/\/$/, ''); // eslint-disable-line no-undef
// let token = null;
// let look = false;
// export function authorize(newToken) {
//   token = newToken;
// }

// export function deauthorize() {
//   token = null;
// }

// const DEFAULT_HEADERS = {
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// };

// function addDefaultHeaders(config) {
//   const altered = _.defaultsDeep(config, DEFAULT_HEADERS);
//   if (token) {
//     return _.defaultsDeep(altered, { headers: {} }); //"X-User-Api-Token": token
//   } else {
//     return altered;
//   }
// }

// function buildPath(path, baseUrl = ROOT_URL) {
//   if (baseUrl) return baseUrl + '/' + path;
//   else return ROOT_URL + '/' + path;
// }

// export async function get(path, config = {}, baseUrl, params = {}) {
//   return fetch('GET', path, undefined, config, baseUrl, params);
// }

// export async function post(path, data, config = {}, baseUrl, params = {}) {
//   return fetch('POST', path, data, config, baseUrl, params);
// }

// export async function put(path, data, config = {}, baseUrl, params = {}) {
//   return fetch('PUT', path, data, config, baseUrl, params);
// }

// export async function delete_(path, data, config = {}, baseUrl, params = {}) {
//   return fetch('DELETE', path, data, config, baseUrl, params);
// }

// export async function fetch(method, path, data, config = {}, baseUrl, params) {
//   if (data) {
//     for (let k of Object.keys(data)) {
//       if (!data[k]) {
//         console.warn(
//           `You try send key ${k} without value at the request to ${path}`
//         );
//       }
//     }
//   }
//   var request = {
//     method,
//     url: buildPath(path, baseUrl),
//     data: data,
//     withCredentials: true,
//     // credentials: 'include',
//     ...addDefaultHeaders(config)
//   };
//   request = _.defaultsDeep(request, params);
//   var response = axios(request);
//   onActionNumber(response);
//   return response;
// }

// const onActionNumber = function(promise) {
//   promise
//     .then(function(response) {
//       switch (parseInt(response.headers['action-number'])) {
//         case 0:
//           return;
//         case 1:
//           if (!look) {
//             look = true;
//             var r = alert('A new version is available');
//             location.reload(true);
//           }
//           look = true;
//         default:
//           return;
//       }
//     })
//     .catch(function(error) {
//       console.error(error.message);
//       return;
//     });
// };

// export function handleApiError(error, dispatch, dispatchError) {
//   console.error(error);
//   if (error.response && error.response.status === 401) {
//     // The request was made and the server responded with a 401 status code
//     // dispatch(logoutUser());
//   } else if (
//     error.response &&
//     error.response.status === 400 &&
//     error.response.data &&
//     error.response.data.message &&
//     error.response.data.message.includes('error.ACCOUNT_IS_NOT_ACTIVE')
//   ) {
//     // history.push('/register/subscription_not_active');
//   } else {
//     dispatchError && dispatchError(extractErrorMessage(error));
//   }
// }

// export function extractErrorMessage(
//   error,
//   defaultMessage = I18n.t('error_no_data')
// ) {
//   const serverMessage = _.get(error, 'response.data.message');
//   const translatedMessage =
//     !!serverMessage && _.isString(serverMessage) && I18n.t(serverMessage);
//   return (
//     translatedMessage ||
//     defaultMessage ||
//     (error && error.request && 'Failed to connect')
//   );
// }
