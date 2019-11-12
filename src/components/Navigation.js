import React, { useContext } from 'react';
import Container from './layout/Container';
import DropDown from './layout/DropDown/DropDown';
import Button from './layout/Button';

import FormularContext from '../context/formular/FormularContext';

import data from '../data/data';

import logo from '../images/logo.png';

const Navigation = () => {

    const formularContext = useContext(FormularContext);
    const {language, questions, languageUpdate, questionsUpdate} = formularContext;

    const languages = [
        { label: 'English', value: 'english' },
        { label: 'French', value: 'french' },
        { label: 'Spanish', value: 'spanish'},
        { label: "Italian", value: "italian"},
        { label: "German", value: "german"},
        { label: "Portuguese", value: "portuguese"},
        { label: "LATAM", value: "latam"},
        { label: "Japanese", value: "japanese"}
    ]

    const handeItemsClick = e => {        
        languageUpdate(e.target.textContent, e.target.value);
    }

    const addQuestion = () => {
        const newQuestions = [...questions];
        newQuestions.push(JSON.parse(JSON.stringify(data[language.value].type.brandAwareness)))
        questionsUpdate(newQuestions)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Container>
                <div className='nav-left mr-auto d-flex'>
                    <img src={logo} alt='brand pulse logo' className='mr-3' style={{objectFit: "contain"}} />
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
