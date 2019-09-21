import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Container from './layout/Container';
import Questions from './Questions';
import Settings from './Settings';
import Output from './Output';

const Formular = () => {
    return (
        <Fragment>
            <Navigation />

            <Container>
                <Questions />
                <Settings />
                <Output />
            </Container>
        </Fragment>
    )
}

export default Formular;