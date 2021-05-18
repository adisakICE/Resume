import * as types from '../Types'

const setToState_data = (payload) => {
  return {
    type: types.DATA,
    payload
  }
}

export const reducer_data = (payload) => {
  return dispatch => {
    dispatch(setToState_data(payload))
  }
}