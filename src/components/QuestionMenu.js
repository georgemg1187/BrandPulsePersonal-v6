import React, { Fragment, useContext, useState, useEffect } from 'react';
import DropDown from './layout/DropDown/DropDown';
import Button from './layout/Button';

import FormularContext from '../context/formular/FormularContext';
import QuestionContext from '../context/question/QuestionContext';

import data from '../data/data';

const QuestionMenu = ({ idx }) => {

    const formularContext = useContext(FormularContext);
    const { language, questions, questionsUpdate } = formularContext;

    const questionContext = useContext(QuestionContext);
    const { metric, metricUpdate } = questionContext;

    const [visbility, setvisbility] = useState("none");

    const [dropDownItems, setDropDownItems] = useState({ ...data[language.value].menuItems })

    useEffect(() => {
        const d = questions.length === 1 ? "none" : "initial";
        setvisbility(d)
    }, [questions])

    useEffect(() => {
        const label = data[language.value].menuItems[metric.value].label
        const value = data[language.value].menuItems[metric.value].value

        metricUpdate(label, value)
        setDropDownItems({ ...data[language.value].menuItems })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])

    const removeCard = () => {
        const newQuestions = questions.filter((question, index) => (idx !== index));
        questionsUpdate(newQuestions);
    }

    const handleDropDownClick = e => {
        const label = e.target.textContent;
        const value = e.target.value;
        metricUpdate(label, value);

        const newQeustions = [...questions]
        newQeustions[idx] = JSON.parse(JSON.stringify(data[language.value].type[value]))
        questionsUpdate(newQeustions)
    }

    return (
        <Fragment>
            <DropDown>
                <DropDown.Toggle>
                    {metric.label}
                </DropDown.Toggle>
                <DropDown.Menu>
                    {Object.keys(dropDownItems).map((item, idx) => {
                        return <DropDown.Item key={item} value={dropDownItems[item].value} onClick={handleDropDownClick}>{dropDownItems[item].label}</DropDown.Item>
                    })}
                </DropDown.Menu>
            </DropDown>

            <Button className='close' onClick={removeCard} style={{ display: visbility }}>
                <span aria-hidden="true">&times;</span>
            </Button>
        </Fragment>
    )
}

export default QuestionMenu
