import * as types from '../Types';

const initalState_user = {
    data: null
}

const fn =  (state = initalState_user, action) => {
    switch (action.type) {
        case types.USER:
            return {
                ...state, data: action.payload
            }
        default:
            return state
    }
}

export default fn;