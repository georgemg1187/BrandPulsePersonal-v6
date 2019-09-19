import React from 'react';
import Card from './layout/Card/Card';
import Buttons from './Buttons';

const Settings = () => {
    return (
        <Card>
            <Card.Header>
                <h4 className='py-2 my-0'>Global Settings</h4>
            </Card.Header>
            <Card.Body>
                <Buttons />
            </Card.Body>
        </Card>
    )
}

export default Settings
