import {
    PASSWORD_SUBMIT
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case PASSWORD_SUBMIT: 
            return {
            ...state,
            passwordMatched: true
        }
        default:
            return state
    }
}