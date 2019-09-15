import {
    PASSWORD_SUBMIT,
    CODE_SUBMITED
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case PASSWORD_SUBMIT: 
            return {
            ...state,
            passwordMatched: true
        }
        case CODE_SUBMITED: 
        return {
        ...state,
        codeSubmited: true
    }
        default:
            return state
    }
}