import {
    LANGUAGE_UPDATE,
    QUESTIONS_UPDATE,
    NEXT_BTN_UPDATE,
    SUBMIT_BTN_UPDATE,
    END_MSG_UPDATE
} from "../types"

export default (state, action) => {
    switch (action.type) {
        case LANGUAGE_UPDATE:
            return {
                ...state,
                language: action.payload
            }
        case QUESTIONS_UPDATE:
            return {
                ...state,
                questions: action.payload
            }

        case NEXT_BTN_UPDATE:
            return {
                ...state,
                nextBtn: action.payload
            }
        case SUBMIT_BTN_UPDATE:
            return {
                ...state,
                submitBtn: action.payload
            }
        case END_MSG_UPDATE:
            return {
                ...state,
                endMessage: action.payload
            }
        default:
            return state
    }
}