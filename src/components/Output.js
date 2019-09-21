import React, {useContext, useState, useEffect} from 'react';
import Card from './layout/Card/Card';
import Button from './layout/Button';
import Code from './Code';

import FormularContext from '../context/formular/FormularContext';

const Output = () => {

    const formularContext = useContext(FormularContext);
    const {tracking} = formularContext; 

    const [style, setStyle] = useState({width: "48%"})

    useEffect(() => {
        const  newStyle = {width: (tracking.exposed !== false && tracking.nonexposed !== false) ? 'width: 48%' : '100%'};
        setStyle(newStyle)
    }, [tracking])

    return (
        <Card className="mt-5">
            <Card.Header>
                <h5>Generated Code</h5>
            </Card.Header>
            <Card.Body>
                <Button className='btn-primary btn-lg btn-block'>Generate Code</Button>
                <div className='d-flex justify-content-between'>
                    <Code title='Exposed Code' value='Ceva random text' style={style} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default Output
