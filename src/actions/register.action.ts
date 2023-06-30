import { REGISTER_FAILED, REGISTER_FETCHING, REGISTER_SUCCESS } from "../Constants";

export const setRegisterFetchingToState = () => ({
  type: REGISTER_FETCHING,
})

export const setRegisterSuccessToState = (payload:any) => ({
  type: REGISTER_SUCCESS,
  payload
})

export const setRegisterFailedToState = () => ({
  type: REGISTER_FAILED,
  
})
