import React, { useReducer } from 'react';
import FormularContext from './FormularContext';
import FormularReducer from './FormularReducer';

import data from '../../data/data'

import {
    LANGUAGE_UPDATE,
    METRICS_UPDATE,
    QUESTIONS_UPDATE,
    NEXT_BTN_UPDATE,
    SUBMIT_BTN_UPDATE,
    END_MSG_UPDATE
} from "../types"

const FormularState = props => {
    const initialState = {
        language: {label: 'English', value: 'english'},
        metrics: [{label: 'Brand Awareness', value: 'brandAwareness'}],
        questions: [{...data.english.type.brandAwareness}],
        nextBtn: "Next",
        submitBtn: "Submit",
        endMessage: "Thank you",
    }

    const [state, dispatch] = useReducer(FormularReducer, initialState)

    const languageUpdate = (label, value) => {
        dispatch({
            type: LANGUAGE_UPDATE,
            payload: { label, value }
        })
    }

    const metricsUpdate = list => {
        dispatch({
            type: METRICS_UPDATE,
            payload: list
        })
    }

    const questionsUpdate = list => {
        dispatch({
            type: QUESTIONS_UPDATE,
            payload: list
        })
    }

    const nextBtnUpdate = text => {
        dispatch({
            type: NEXT_BTN_UPDATE,
            payload: text
        })
    }

    const submitBtnUpdate = text => {
        dispatch({
            type: SUBMIT_BTN_UPDATE,
            payload: text
        })
    }

    const endMessageUpdate = text => {
        dispatch({
            type: END_MSG_UPDATE,
            payload: text
        })
    }

    return (
        <FormularContext.Provider
            value={{
                language: state.language,
                metrics: state.metrics,
                questions: state.questions,
                nextBtn: state.nextBtn,
                submitBtn: state.submitBtn,
                endMessage: state.endMessage,
                languageUpdate,
                metricsUpdate,
                questionsUpdate,
                nextBtnUpdate,
                submitBtnUpdate,
                endMessageUpdate
            }}
        >
            {props.children}
        </FormularContext.Provider>
    )
}

export default FormularState;