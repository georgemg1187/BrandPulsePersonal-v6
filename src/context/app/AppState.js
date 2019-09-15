import React, {useReducer} from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

import {
    PASSWORD_SUBMIT,
    CODE_SUBMITED
} from "../types"

const AppState = props => {
    const initialState = {
        password: "teads",
        passwordMatched: false,
        codeSubmited: false
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const passwordSubmit = () => dispatch({ type: PASSWORD_SUBMIT })
    const handleCodeView = () => dispatch({type: CODE_SUBMITED})
    
    return (
        <AppContext.Provider 
            value={{
                password: state.password,
                passwordMatched: state.passwordMatched,
                codeSubmited: state.codeSubmited,
                passwordSubmit,
                handleCodeView
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;