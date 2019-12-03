// actions type
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//actions creator
export const logInRequest = () => ({
  type: LOGIN_REQUEST
});

export const logInSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const logInFailure = errorMessage => ({
  type: LOGIN_FAILURE,
  payload: errorMessage
});
