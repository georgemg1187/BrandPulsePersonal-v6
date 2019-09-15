import React, { useReducer } from 'react';
import BrandPulseContext from './BrandPulseContext';
import BrandPulseReducer from './BrandPulseReducer';

import {
    LANGUAGE_UPDATE,
    QUESTION_NUMBER_UPDATE,
    QUESTION_LIST
} from "../types"

const BrandPulseState = props => {
    const initialState = {
        language: { label: "English", value: "english" },
        question: { label: "Question 1", value: 1 },
        questionList: ["Question 1"]
    }

    const [state, dispatch] = useReducer(BrandPulseReducer, initialState)

    const languageUpdate = (label, value) => {
        dispatch({
            type: LANGUAGE_UPDATE,
            payload: { label, value }
        })
    }

    const questionNumberUpdate = (label, value) => {
        dispatch({
            type: QUESTION_NUMBER_UPDATE,
            payload: { label, value }
        })
    }

    const setQuestionList = list => {
        dispatch({
            type: QUESTION_LIST,
            payload: list
        })
    }

    return (
        <BrandPulseContext.Provider
            value={{
                language: state.language,
                question: state.question,
                questionList: state.questionList,
                languageUpdate,
                questionNumberUpdate,
                setQuestionList
            }}
        >
            {props.children}
        </BrandPulseContext.Provider>
    )
}

export default BrandPulseState;