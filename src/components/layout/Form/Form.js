import React from 'react'
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormInput from './FormInput'

const Form = ({children, id, className, style, onSubmit}) => {
    return (
        <form id={id} className={className} style={style} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

const defaultSubmit = e => e.preventDefault();

Form.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onSubmit: PropTypes.func
}

Form.defaultProps = {
    className: '',
    style: {},
    onSubmit: defaultSubmit
}

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Input = FormInput

export default Form
