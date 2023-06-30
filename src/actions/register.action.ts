import { User } from "./../../../mishos/src/types/user.type";
import {
  REGISTER_FAILED,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  server,
} from "../Constants";
import { httpClient } from "../utils/httpclient";

export const setRegisterFetchingToState = () => ({
  type: REGISTER_FETCHING,
});

export const setRegisterSuccessToState = (payload: any) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const setRegisterFailedToState = () => ({
  type: REGISTER_FAILED,
});

export const register = (user: User) => {
  return async (dispatch: any) => {
    try {
      // begin connection...
      dispatch(setRegisterFailedToState);

      //connect
      const result = await httpClient.post(server.REGISTER_URL, user);
      dispatch(setRegisterSuccessToState(result.data));
    } catch (err) {
      //error
      dispatch(setRegisterFailedToState());
    }
  };
};
