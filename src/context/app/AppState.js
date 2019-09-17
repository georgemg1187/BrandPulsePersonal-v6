import React, {useReducer} from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

import {
    PASSWORD_SUBMIT
} from "../types"

const AppState = props => {
    const initialState = {
        password: "teads",
        passwordMatched: true,
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const passwordSubmit = () => dispatch({ type: PASSWORD_SUBMIT })
    
    return (
        <AppContext.Provider 
            value={{
                password: state.password,
                passwordMatched: state.passwordMatched,
                passwordSubmit
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;