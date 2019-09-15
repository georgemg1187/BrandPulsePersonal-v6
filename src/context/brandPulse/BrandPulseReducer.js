import {
    LANGUAGE_UPDATE,
    QUESTION_NUMBER_UPDATE,
    QUESTION_LIST
} from "../types"

export default (state, action) => {
    switch (action.type) {
        case LANGUAGE_UPDATE:
            return {
                ...state,
                language: action.payload
            }
        case QUESTION_NUMBER_UPDATE:
            return {
                ...state,
                question: action.payload
            }
        case QUESTION_LIST:
            return {
                ...state,
                questionList: action.payload
            }
        default:
            return state
    }
}