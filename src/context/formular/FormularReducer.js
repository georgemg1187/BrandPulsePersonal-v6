import {
    LANGUAGE_UPDATE,
    QUESTIONS_UPDATE,
    NEXT_BTN_UPDATE,
    SUBMIT_BTN_UPDATE,
    END_MSG_UPDATE,
    PROGESS_BOX_UPDATE,
    TRACKING_UPDATE,
    VARIANT_UPDATE
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
        case PROGESS_BOX_UPDATE:
            return {
                ...state,
                progressBox: action.payload
            }

        case TRACKING_UPDATE:
            return {
                ...state,
                tracking: action.payload
            }
        case VARIANT_UPDATE:
            return {
                ...state,
                variant: action.payload
            }
        default:
            return state
    }
}