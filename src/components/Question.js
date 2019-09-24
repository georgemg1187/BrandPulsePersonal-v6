import React, { useContext, useEffect, useState } from 'react';
import Card from './layout/Card/Card';
import QuestionText from './QuestionText';
import QuestionMenu from './QuestionMenu';
import QuestionConfig from './QuestionConfig';
import Answers from './Answers';

import FormularContext from '../context/formular/FormularContext';
import QuestionContext from '../context/question/QuestionContext';

import data from '../data/data'

const Question = ({ idx }) => {

    const formularContext = useContext(FormularContext);
    const { language, questions, questionsUpdate } = formularContext;

    const questionContext = useContext(QuestionContext);
    const { metric } = questionContext;

    const [lng, setLng] = useState(language);

    useEffect(() => {
        if (lng === language) return;

        setLng(language)
        const newQeustions = questions.map(question => JSON.parse(JSON.stringify(data[language.value].type[metric.value])))
        questionsUpdate(newQeustions) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])

    return (
        <Card>
            <Card.Header className='d-flex justify-content-between'>
                <QuestionMenu idx={idx} />
            </Card.Header>
            <Card.Body>
                <QuestionText idx={idx} />
                <QuestionConfig idx={idx} />
                <Answers idx={idx} />
            </Card.Body>
        </Card>
    )
}


export default Question