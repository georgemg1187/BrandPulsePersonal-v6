import React, { useContext } from 'react';
import Container from './layout/Container';
import DropDown from './layout/DropDown/DropDown';
import Button from './layout/Button';

import FormularContext from '../context/formular/FormularContext';

import data from '../data/data';

const Navigation = () => {

    const formularContext = useContext(FormularContext);
    const {language, metrics, questions, languageUpdate, metricsUpdate, questionsUpdate} = formularContext;

    const languages = [
        { label: 'English', value: 'english' },
        { label: 'French', value: 'french' }
    ]

    const handeItemsClick = e => {
        const newMetrics = metrics.map(metric => { return {...data[e.target.value].menuItems[metric.value]} })
        const newQeustions = questions.map((question, idx) => data[e.target.value].type[newMetrics[idx].value] )
        
        languageUpdate(e.target.textContent, e.target.value);
        metricsUpdate(newMetrics)
        questionsUpdate(newQeustions)
    }

    const addQuestion = () => {
        const newQestions = [...questions];
        newQestions.push({ ...data[language.value].type.brandAwareness})
        questionsUpdate(newQestions)

        const newMetrics = [...metrics];
        newMetrics.push({...data[language.value].menuItems.brandAwareness})
        metricsUpdate(newMetrics)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Container>
                <div className='nav-left mr-auto'>
                    <DropDown>
                        <DropDown.Toggle>
                            {language.label}
                        </DropDown.Toggle>

                        <DropDown.Menu>
                            {languages.map(lng => {
                                return <DropDown.Item key={lng.value} value={lng.value} onClick={handeItemsClick}> {lng.label} </DropDown.Item>
                            })}
                        </DropDown.Menu>
                    </DropDown>
                </div>
                <div className='nav-right'>
                    <Button className="px-5" style={{color: "black", background: "white"}} onClick={addQuestion}>Add Question</Button>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation
