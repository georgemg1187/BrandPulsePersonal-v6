import React from 'react';
import Card from './layout/Card/Card';
import Buttons from './Buttons';
import PixelsTracking from './PixelsTracking';
import SurveyLayout from './SureyLayout';

const Settings = () => {
    return (
        <Card>
            <Card.Header>
                <h5 className='py-1 my-0'>Global Settings</h5>
            </Card.Header>
            <Card.Body>
                <Buttons />
                <PixelsTracking />
                <SurveyLayout />
            </Card.Body>
        </Card>
    )
}

export default Settings
