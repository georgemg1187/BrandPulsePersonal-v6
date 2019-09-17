import React,{useContext} from 'react';
import Question from './Question';
import FormularContext from '../context/formular/FormularContext';

const Questions = () => {
    const formularContext = useContext(FormularContext);
    const {questions} = formularContext;

    return (
        <div className='my-5'>
            {questions.map((question, idx) => {
                return <Question key={`Q${ idx + 1 }`} idx={idx} />
            })} 
        </div>
    )
}

export default Questions
