import React, {useContext, useState, useEffect} from 'react';
import Card from './layout/Card/Card';
import Button from './layout/Button';
import Code from './Code';
import Generate from './functions/Generate';

import FormularContext from '../context/formular/FormularContext';

const Output = () => {

    const formularContext = useContext(FormularContext);
    const {tracking, questions, progressBox, nextBtn, submitBtn, endMessage, variant} = formularContext; 

    const [width, setWidth] = useState("48%")
    const [display, setDisplay] = useState("none")
    const [title, setTitle] = useState(['Generated Code', 'Generated Code'])
    const [value, setValue] = useState(['', ''])

    useEffect(() => {
        const  newWidth = (tracking.exposed !== false && tracking.noneexposed !== false) ? '48%' : '100%'
        const newDisplay = (tracking.exposed !== false && tracking.noneexposed !== false) ? 'block' : 'none'
        const newTitle = (tracking.exposed !== false && tracking.noneexposed !== false) ? ["Exposed Code", "Non-Exposed Code"] : ['Generated Code', 'Generated Code']

        setWidth(newWidth)
        setDisplay(newDisplay)
        setTitle(newTitle)
    }, [tracking])

    const generateOuput = () => Generate(tracking, questions, progressBox, nextBtn, submitBtn, endMessage, variant, setValue)

    return (
        <Card className="mt-5">
            <Card.Header>
                <h5>Generated Code</h5>
            </Card.Header>
            <Card.Body>
                <Button className='btn-primary btn-lg btn-block' onClick={generateOuput}>Generate Code</Button>
                <div className='d-flex justify-content-between'>
                    <Code title={title[0]} value={value[0]} style={{width: width}} />
                    <Code title={title[1]} value={value[1]} style={{width: width, display: display}} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default Output
