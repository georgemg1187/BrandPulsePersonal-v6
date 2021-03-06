import React, { useReducer } from 'react';
import FormularContext from './FormularContext';
import FormularReducer from './FormularReducer';

import data from '../../data/data'

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

const FormularState = props => {
    const initialState = {
        language: {label: 'English', value: 'english'},
        questions: [JSON.parse(JSON.stringify(data.english.type.brandAwareness))],
        nextBtn: "Next",
        submitBtn: "Submit",
        endMessage: "Thank you",
        progressBox: true,
        tracking: {
            exposed: false,
            noneexposed: false
        },
        variant: 'bg1'
    }

    const [state, dispatch] = useReducer(FormularReducer, initialState)

    const languageUpdate = (label, value) => {
        dispatch({
            type: LANGUAGE_UPDATE,
            payload: { label, value }
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

    const progressBoxUpdate = bool => {
        dispatch({
            type: PROGESS_BOX_UPDATE,
            payload: bool
        })
    }

    const trackingUpdate = obj => {
        dispatch({
            type: TRACKING_UPDATE,
            payload: obj
        })
    }

    const variantUpdate = text => {
        dispatch({
            type: VARIANT_UPDATE,
            payload: text
        })
    }

    return (
        <FormularContext.Provider
            value={{
                language: state.language,
                questions: state.questions,
                nextBtn: state.nextBtn,
                submitBtn: state.submitBtn,
                endMessage: state.endMessage,
                progressBox: state.progressBox,
                tracking: state.tracking,
                variant: state.variant,
                languageUpdate,
                questionsUpdate,
                nextBtnUpdate,
                submitBtnUpdate,
                endMessageUpdate,
                progressBoxUpdate,
                trackingUpdate,
                variantUpdate
            }}
        >
            {props.children}
        </FormularContext.Provider>
    )
}

export default FormularState;