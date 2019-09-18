import React, { useContext } from 'react';
import Form from './layout/Form/Form';
import Group from './layout/Group';

import FormularContex from '../context/formular/FormularContext';

const QuestionConfig = ({ idx }) => {

    const formularContext = useContext(FormularContex);
    const { questions, questionsUpdate } = formularContext;

    const handleMultiple = () => {
        const newQuestions = [...questions]
        newQuestions[idx].multiple = !questions[idx].multiple;
        questionsUpdate(newQuestions);
    }

    const handleRandomize = () => {
        const newQuestions = [...questions]
        newQuestions[idx].randomize = !questions[idx].randomize;
        questionsUpdate(newQuestions);
    }

    const handleSwitch = () => {
        const newQuestions = [...questions]
        newQuestions[idx].none.checked = !questions[idx].none.checked;
        questionsUpdate(newQuestions);

        console.log("swithd: ", questions[idx])
    }

    const handleNone = e => {
        const newQuestions = [...questions]
        newQuestions[idx].none.value = e.target.value
        questionsUpdate(newQuestions);
    }

    return (
        <Group>
            <Form className='d-flex justify-content-between align-items-center'>
                <Form.Group className='mb-0' version='custom-control custom-checkbox'>
                    <Form.Input type="checkbox" version="custom-control-input" id={`multiple_${idx + 1}`} checked={questions[idx].multiple} onChange={handleMultiple} />
                    <Form.Label variant="custom-control-label" htmlFor={`multiple_${idx + 1}`}>Multiple Answers</Form.Label>
                </Form.Group>
                <Form.Group className='mb-0' version='custom-control custom-checkbox'>
                    <Form.Input type="checkbox" version="custom-control-input" id={`randomize_${idx + 1}`} checked={questions[idx].randomize} onChange={handleRandomize} />
                    <Form.Label variant="custom-control-label" htmlFor={`randomize_${idx + 1}`}>Randomize Answers</Form.Label>
                </Form.Group>
                <div>
                    <Form.Group className='mb-0 d-flex justify-content-between align-items-center' version='custom-control custom-switch'>
                        <Form.Input type="checkbox" version="custom-control-input" id={`none_${idx + 1}`} checked={questions[idx].none.checked} onChange={handleSwitch} />
                        <Form.Label variant="custom-control-label" htmlFor={`none_${idx + 1}`}>None</Form.Label>

                        <Form.Input type="text" className='ml-3' value={questions[idx].none.value} disabled={!questions[idx].none.checked} onChange={handleNone} />
                    </Form.Group>
                </div>
            </Form>
        </Group>
    )
}

export default QuestionConfig