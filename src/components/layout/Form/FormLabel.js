import React from 'react'
import PropTypes from 'prop-types'

const FormLabel = ({children, variant, htmlFor}) => {
    return (
        <label className={variant} htmlFor={htmlFor}>{children}</label>
    )
}

FormLabel.propTypes = {
    htmlFor: PropTypes.string,
    variant: PropTypes.oneOf(["default", "custom-control-label"]),
}

FormLabel.defaultProps = {
    variant: 'default'
}

export default FormLabel
