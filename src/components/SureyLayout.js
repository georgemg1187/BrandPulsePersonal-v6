import React, { useContext, useState } from 'react';
import Form from './layout/Form/Form';
import DropDown from './layout/DropDown/DropDown';

import FormularContext from '../context/formular/FormularContext';

const SurveyLayout = () => {

    const formularContext = useContext(FormularContext);
    const { progressBox, progressBoxUpdate, variantUpdate } = formularContext;

    const [toogle, setToogle] = useState('Black on white text');

    const menuItems = [
        { label: 'Black on white text', value: 'bg1' },
        { label: 'Black and blue on white text', value: 'bg2' },
        { label: 'White and black on grey', value: 'bg3' },
        { label: 'Card with white text', value: 'bg4' }
    ]

    const handleMenuItem = e => {
        variantUpdate(e.target.value);
        setToogle(e.target.textContent);
    }

    const handleProgressChange = () => progressBoxUpdate(!progressBox)

    return (
        <Form className='d-flex align-items-center justify-content-between'>
            <Form.Group className='d-flex align-items-center mt-3'>
                Select Brand Pulse Style:
                <DropDown>
                    <DropDown.Toggle className="btn-primary ml-3" style={{minWidth: '250px'}}>
                        {toogle}
                    </DropDown.Toggle>
                    <DropDown.Menu style={{minWidth: '250px'}}>
                        {menuItems.map(item => {
                            return (
                                <DropDown.Item key={item.value} value={item.value} onClick={handleMenuItem}>
                                    {item.label}
                                </DropDown.Item>
                            )
                        })
                        }
                    </DropDown.Menu>
                </DropDown>
            </Form.Group>

            <Form.Group className='mb-0' version='custom-control custom-checkbox'>
                <Form.Input type="checkbox" version="custom-control-input" id='progress-box' checked={progressBox} onChange={handleProgressChange} />
                <Form.Label variant="custom-control-label" htmlFor='progress-box'>Show progress box</Form.Label>
            </Form.Group>
        </Form>
    )
}

export default SurveyLayout
