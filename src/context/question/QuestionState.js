import React, { useReducer } from 'react';
import QuestionContext from './QuestionContext';
import QuestionReducer from './QuestionReducer';

import {
    METRIC_UPDATE
} from "../types";

const QuestionState = props => {
    const initialState = {
        metric: {label: "Brand Awareness", value: "brandAwareness"},
    }

    const [state, dispatch] = useReducer(QuestionReducer, initialState)

    const metricUpdate = (label, value) => {
        dispatch({
            type: METRIC_UPDATE,
            payload: {label, value}
        })
    }

    return (
        <QuestionContext.Provider 
            value={{
                metric: state.metric,
                metricUpdate
            }}
        >
            {props.children}
        </QuestionContext.Provider>
    )
}

export default QuestionState;