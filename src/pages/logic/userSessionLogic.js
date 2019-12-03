import {
  LOGIN_REQUEST,
  logInSuccess,
  logInFailure
} from '../../redux/actions/userSessionActions';
import { createLogic } from 'redux-logic';
// import { extractErrorMessage } from '../../api/ApiHelper';

const loginLogic = createLogic({
  type: [LOGIN_REQUEST],
  latest: true,
  name: 'login request',

  async process({ action }, dispatch, done) {
    try {
      const { user, token, rememberMe } = action;

      setTimeout(() => {}, 2000);

      dispatch(logInSuccess(user, token, rememberMe));
    } catch (error) {
      console.error(error);
      // const message = extractErrorMessage(error);
      dispatch(logInFailure(error));
    } finally {
      done();
    }
  }
});

export default loginLogic;
