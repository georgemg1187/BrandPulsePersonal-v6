import React, {useContext} from 'react';
import Login from './Login';
import Forumlar from './Formular';

import AppContext from '../context/app/AppContext';
import FormularState from '../context/formular/FormularState';

const Page = () => {
    const appContext = useContext(AppContext);
    const {passwordMatched} = appContext;

    const renderPage = () => {
        if (passwordMatched) return <FormularState><Forumlar/></FormularState> 
        return <Login/> 
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default Page
