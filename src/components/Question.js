import React from 'react';
import Card from './layout/Card/Card';
import QuestionMenu from './QuestionMenu';
import QuestionConfig from './QuestionConfig';
import Answers from './Answers';

const Question = ({idx}) => {
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