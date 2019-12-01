import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILUER } from '../actions/type';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        authenticated: false,
        data: payload,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        authenticated: true,
        loading: false
      };
    case LOGIN_FAILUER:
      return {
        errorMessage: 'error',
        loading: false,
        authenticated: false
      };
    default:
      return state;
  }
};
