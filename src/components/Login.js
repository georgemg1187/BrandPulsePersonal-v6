import React, {useContext, useState} from 'react';
import Container from './layout/Container';
import Row from './layout/Row';
import Col from './layout/Col';
import Form from './layout/Form/Form';
import Button from './layout/Button';

import AppContext from '../context/app/AppContext';

const Login = () => {

    const appContext = useContext(AppContext);
    const {password, passwordSubmit} = appContext;

    const [value, setValue] = useState('');

    const updateInput = e => setValue(e.target.value)
    const handlePasswordSubmit = e => {
        e.preventDefault();
        if (password === value) passwordSubmit();
    }

    return (
        <Container className='d-flex justify-content-center' style={containerStyle}>
            <Row className='d-flex align-items-center text-center'>
                <Col>
                    <h1>Brand Pulse Form</h1>
                    <p>Contact phill.sumner@teads.tv for password</p>
                    <Form onSubmit={handlePasswordSubmit}>
                        <Form.Group>
                            <Form.Input type="password" value={value} onChange={updateInput} placeholder='Password' id='login'></Form.Input>
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" className='btn-primary btn-block'>Submit</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

const containerStyle = {
    height: '100vh'
}
export default Login
