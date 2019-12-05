import React, { useContext, useEffect } from 'react'
import Form from './layout/Form/Form';

import FormularContext from '../context/formular/FormularContext';
import QuestionContext from '../context/question/QuestionContext';

const Answers = ({ idx }) => {

    const formularContext = useContext(FormularContext);
    const { questions, questionsUpdate } = formularContext;

    const questionContext = useContext(QuestionContext);
    const { metric } = questionContext;

    const maxAnswers = 5;

    useEffect(() => {
        const newQuestions = [...questions];

        if (metric.value === "custom") {
            if (newQuestions[idx].none.checked) {
                newQuestions[idx].answers.pop();
            } else if (newQuestions[idx].answers.length < maxAnswers) newQuestions[idx].answers.push("")
        }

        questionsUpdate(newQuestions)// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [metric, questions[idx].none.checked])

    const onChange = (e, index) => {
        const newQuestions = [...questions];
        newQuestions[idx].answers[index] = e.target.value;
        questionsUpdate(newQuestions)
    }

    return (
        <Form className="mt-3 d-flex justify-content-between flex-wrap">
            {questions[idx].answers.map((answer, index) => {
                return (
                    <Form.Group key={index} style={{ width: '48%' }} >
                        <Form.Label>{`Answer ${index + 1}`}</Form.Label>
                        <Form.Input type="text" value={answer} onChange={(e) => onChange(e, index)} maxLength={50} />
                    </Form.Group>
                )
            })}
        </Form>
    )
}

export default Answers
