import * as types from '../Types'

const setToState_user = (payload) => {
  return {
    type: types.USER,
    payload
  }
}

export const reducer_user = (payload) => {
  return dispatch => {
    dispatch(setToState_user(payload))
  }
}