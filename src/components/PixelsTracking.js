import React from 'react';
import Group from './layout/Group';
import Form from './layout/Form/Form';

const PixelsTracking = () => {
    return (
        <Group>
            <Form>
                <Form.Group version='custom-control custom-switch'>
                    <Form.Input type="checkbox" version="custom-control-input" id='pixels-cb' checked={questions[idx].none.checked} onChange={handleSwitch} />
                    <Form.Label variant="custom-control-label" htmlFor='piexels-cb'>None</Form.Label>
                </Form.Group>
            </Form>
        </Group>
    )
}

export default PixelsTracking
