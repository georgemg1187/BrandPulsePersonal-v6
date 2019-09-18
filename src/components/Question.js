import React, { useContext, useEffect } from 'react';
import Card from './layout/Card/Card';
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

    useEffect(() => {
        const newQeustions = questions.map((question, index) => {
            return {...data[language.value].type[metric.value] }
        })

        questionsUpdate(newQeustions)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language, metric])

    return (
        <Card>
            <Card.Header className='d-flex justify-content-between'>
                <QuestionMenu idx={idx} />
            </Card.Header>
            <Card.CardBody>
                <QuestionConfig idx={idx} />
                <Answers idx={idx} />
            </Card.CardBody>
        </Card>
    )
}


export default Question