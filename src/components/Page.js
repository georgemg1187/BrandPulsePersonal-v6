import React, {useContext} from 'react';
import Login from './Login';
import Forumlar from './Formular';
import Output from './Output';

import AppContext from '../context/app/AppContext';

const Page = () => {
    const appContext = useContext(AppContext);
    const {passwordMatched, codeSubmited} = appContext;

    const renderPage = () => {
        if (codeSubmited) return  <Output />
        if (passwordMatched) return <Forumlar/>
        return <Login/> 
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default Page
