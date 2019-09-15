import React from 'react'
import PropTypes from 'prop-types'

const FormLabel = ({children, htmlFor}) => {
    return (
        <label className="custom-control-label" htmlFor={htmlFor}>{children}</label>
    )
}

FormLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
}

export default FormLabel
