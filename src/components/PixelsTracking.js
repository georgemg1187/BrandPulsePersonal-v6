import React, { useContext, useState } from 'react';
import Group from './layout/Group';
import Form from './layout/Form/Form';

import FormularContext from '../context/formular/FormularContext';

const PixelsTracking = () => {

    const formularContext = useContext(FormularContext);
    const { tracking, trackingUpdate } = formularContext;

    const [disabled, setDisabled] = useState(false);
    const [display, setDisplay] = useState('none');
    const [margin, setMargin] = useState('mb-0');

    const handleSwitch = () => {
        setDisabled(!disabled);

        if (disabled) {
            setDisabled(false)
            setDisplay('none')
            setMargin('mb-0')
            const newTracking = {...tracking}
            newTracking.exposed = false
            newTracking.noneexposed = false
            trackingUpdate(newTracking);
        } else {
            setDisplay('block')
            setMargin('mb-3')
            const newTracking = {...tracking}
            newTracking.exposed = ''
            newTracking.noneexposed = ''
            trackingUpdate(newTracking);
        }
    }

    const handleInputUpdate = e => {
        const newTracking = {...tracking}
        newTracking[e.target.name] = e.target.value;
        trackingUpdate(newTracking);
    }

    return (
        <Group className='my-3'>
            <Form>
                <Form.Group className={margin} version='custom-control custom-switch'>
                    <Form.Input type="checkbox" version="custom-control-input" id='pixels-cb' checked={disabled} onChange={handleSwitch} />
                    <Form.Label variant="custom-control-label" htmlFor='pixels-cb'>Add tracking pixels for end message below</Form.Label>
                </Form.Group>
                <div style={{ display: display }}>
                    <Form.Group>
                        <Form.Label htmlFor='exposed'>Exposed Tracking</Form.Label>
                        <Form.Input name='exposed' id='exposed' value={tracking.exposed} onChange={handleInputUpdate} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='non-exposed'>Non-Exposed Tracking</Form.Label>
                        <Form.Input name='noneexposed' id='non-exposed' value={tracking.noneexposed} onChange={handleInputUpdate} />
                    </Form.Group>
                </div>
            </Form>
        </Group>
    )
}

export default PixelsTracking
