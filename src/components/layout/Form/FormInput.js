import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({id, className, style, type, version, name, placeholder, value, onChange}) => {

    const classList = (`${className} ${version}`).trim();

    return (
        <input 
            id={id} 
            className={classList}
            style={style}
            type={type} 
            name={name} 
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    version: PropTypes.oneOf(['custom-control-input', 'form-control']).isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
}

FormInput.defaultProps = {
    className: '',
    version: 'form-control',
    name: '',
    placeholder: ''
}

export default FormInput;
