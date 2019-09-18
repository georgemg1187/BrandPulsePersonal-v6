import React, { Fragment, useContext, useState, useEffect } from 'react';
import DropDown from './layout/DropDown/DropDown';
import Button from './layout/Button';

import FormularContext from '../context/formular/FormularContext';

import data from '../data/data';

const QuestionMenu = ({ idx }) => {

    const formularContext = useContext(FormularContext);
    const { language, metrics, questions, metricsUpdate, questionsUpdate } = formularContext;

    const [visbility, setvisbility] = useState("none");

    const [dropDownItems, setDropDownItems] = useState({ ...data[language.value].menuItems })

    useEffect(() => {
        const d = questions.length === 1 ? "none" : "initial";
        setvisbility(d)

        setDropDownItems({...data[language.value].menuItems})
    }, [questions, language])

    const removeCard = () => {
        const newQuestions = questions.filter((question, index) => (idx !== index));
        questionsUpdate(newQuestions);

        const newMetrics = metrics.filter((metric, index) => (idx !== index));
        metricsUpdate(newMetrics);
    }

    const handleDropDownClick = (e) => {
        const newMetrics = [...metrics];
        newMetrics[idx] = {label: e.target.textContent, value: e.target.value}

        const newQuestions = [...questions]
        newQuestions[idx] = {...data[language.value].type[e.target.value]}

        metricsUpdate(newMetrics);
        questionsUpdate(newQuestions)
    }

    return (
        <Fragment>
            <DropDown>
                <DropDown.Toggle>
                    {metrics[idx].label}
                </DropDown.Toggle>
                <DropDown.Menu>
                    {Object.keys(dropDownItems).map((item, idx) => {
                        return <DropDown.Item key={item} value={dropDownItems[item].value} onClick={handleDropDownClick}>{dropDownItems[item].label}</DropDown.Item>
                    })}
                </DropDown.Menu>
            </DropDown>

            <Button className='close' onClick={removeCard} style={{display: visbility }}>
                <span aria-hidden="true">&times;</span>
            </Button>
        </Fragment>
    )
}

export default QuestionMenu
