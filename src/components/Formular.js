import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Container from './layout/Container';
import Questions from './Questions';

const Formular = () => {
    return (
        <Fragment>
            <Navigation />

            <Container>
                <Questions />
            </Container>
        </Fragment>
    )
}

export default Formular;