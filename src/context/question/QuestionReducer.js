import {
    METRIC_UPDATE
} from "../types"

export default (state, action) => {
    switch (action.type) {
        case METRIC_UPDATE:
            return {
                ...state,
                metric: action.payload
            }
        default:
            return state
    }
}