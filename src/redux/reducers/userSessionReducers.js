import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE
} from '../actions/userSessionActions';
import { initialState } from './initialState';

const userSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        session: {
          user: null,
          loading: true
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        session: {
          user: {
            auth: true,
            name: 'jedaan',
            data: 'asdsadsadsad'
          },
          loading: false
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        session: {
          user: null,
          loading: false
        }
      };
    default:
      return state;
  }
};

export default userSessionReducer;
