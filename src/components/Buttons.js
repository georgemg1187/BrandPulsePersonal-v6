import React, { useContext, useEffect } from 'react'
import Form from './layout/Form/Form';

import FormularContext from '../context/formular/FormularContext';

import data from '../data/data'

const Buttons = () => {

    const formularContext = useContext(FormularContext)
    const { language, nextBtn, submitBtn, endMessage, nextBtnUpdate, submitBtnUpdate, endMessageUpdate } = formularContext;

    useEffect(() => {
        nextBtnUpdate(data[language.value].nextBtn)
        submitBtnUpdate(data[language.value].submitBtn)
        endMessageUpdate(data[language.value].endMessage) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])

    const onChange = (e, callback) => callback(e.target.value)

    return (
        <Form className='d-flex justify-content-between align-items-end'>
            <Form.Group className='mb-0' style={groupStyle}>
                <Form.Label>Next Button</Form.Label>
                <Form.Input type='text' name='nextBtn' value={nextBtn} onChange={(e) => onChange(e, nextBtnUpdate)} />
            </Form.Group>

            <Form.Group className='mb-0' style={groupStyle}>
                <Form.Label>Submit Button</Form.Label>
                <Form.Input type='text' name='submitBtn' value={submitBtn} onChange={(e) => onChange(e, submitBtnUpdate)} />
            </Form.Group>

            <Form.Group className='mb-0' style={groupStyle}>
                <Form.Label>End Page Message</Form.Label>
                <Form.Input type='text' name='endMessage' value={endMessage} onChange={(e) => onChange(e, endMessageUpdate)} />
            </Form.Group>
        </Form>
    )
}

const groupStyle = {
    width: '31%'
}

export default Buttons
