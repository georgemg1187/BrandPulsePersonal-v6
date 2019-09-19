import React, { useContext } from 'react';
import Form from './layout/Form/Form';

import FormularContext from '../context/formular/FormularContext';

const QuestionText = ({idx}) => {

    const formularContext = useContext(FormularContext);
    const {questions, questionsUpdate} = formularContext;

    const onChange = e => {
        const newQuestios = [...questions];
        newQuestios[idx].question = e.target.value;

        questionsUpdate(newQuestios);
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label> {`Question ${idx + 1}`} </Form.Label>
                <Form.Input type="text" value={questions[idx].question} onChange={onChange} className='form-control-lg' />
            </Form.Group>
        </Form>
    )
}

export default QuestionText
