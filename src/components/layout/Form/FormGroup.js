import React from 'react'
import PropTypes from 'prop-types'

const FormGroup = ({ children, id, className, version, style }) => {

    const classList = (`form-group ${className} ${version}`).trim();

    return (
        <div id={id} className={classList} style={style}>
            {children}
        </div>
    )
}

FormGroup.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    version: PropTypes.oneOf(['custom-control custom-radio', 'custom-control custom-checkbox', 'custom-control custom-switch', '']),
}

FormGroup.defaultProps = {
    className: '',
    style: {},
    version: ''
}

export default FormGroup
