import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Container from './layout/Container';
import Questions from './Questions';
import Settings from './Settings';

const Formular = () => {
    return (
        <Fragment>
            <Navigation />

            <Container>
                <Questions />
                <Settings />
            </Container>
        </Fragment>
    )
}

export default Formular;