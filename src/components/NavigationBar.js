import React from 'react';
import Container from './layout/Container';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Container>
                <div className='section-left mr-auto'>
                    Left
                </div>
                <div className='section-right'>
                    right
                </div>
            </Container>
        </nav>
    )
}

export default NavigationBar
