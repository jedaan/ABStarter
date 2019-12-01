import * as type from './type';

export const loginAction = (email, password) => async (
  dispatch,
  getState,
  api
) => {
  try {
    dispatch({ type: type.LOGOUT_REQUEST });
    await api
      .post('/users/Login', {
        email,
        password
      })
      .then(response => {
        let user = response.data;
        console.log('data Login', response);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
          type: type.LOGIN_SUCCESS,
          payload: user
        });
      })
      .catch(function(error) {
        localStorage.clear();
        dispatch({
          type: type.LOGIN_FAILUER,
          payload: false
        });
      });
  } catch (e) {
    console.log('error - logIn ', e.message);
  }
};

export const logOut = () => async (dispatch, getState, api) => {
  try {
    localStorage.clear();
    dispatch({
      type: type.LOGIN_SUCCESS,
      payload: false
    });
  } catch (e) {
    console.log('error - logOut ', e.message);
  }
};
