import React, { useContext } from 'react'
import Form from './layout/Form/Form';

import FormularContext from '../context/formular/FormularContext';

const Answers = ({ idx }) => {

    const formularContext = useContext(FormularContext);
    const { questions, questionsUpdate } = formularContext;

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
                        <Form.Label>{`Answers ${index + 1}`}</Form.Label>
                        <Form.Input type="text" value={answer} onChange={(e) => onChange(e, index)} maxLength={50} />
                    </Form.Group>
                )
            })}
        </Form>
    )
}

export default Answers
