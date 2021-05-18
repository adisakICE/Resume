import * as types from '../Types';

const initalState_data = {
    data: null
}

const fn =  (state = initalState_data, action) => {
    switch (action.type) {
        case types.DATA:
            return {
                ...state, data: action.payload.data
            }
        default:
            return state
    }
}

export default fn;