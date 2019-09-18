import React,{useContext} from 'react';
import Question from './Question';
import FormularContext from '../context/formular/FormularContext';

import QuestionState from '../context/question/QuestionState';

const Questions = () => {
    const formularContext = useContext(FormularContext);
    const {questions} = formularContext;

    return (
        <div className='my-5'>
            {questions.map((question, idx) => {
                return (
                    <QuestionState key={`Q${idx}`}>
                        <Question idx={idx} />
                    </QuestionState>
                )
            })} 
        </div>
    )
}

export default Questions