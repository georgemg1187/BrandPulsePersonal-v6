import React from 'react';
import PropTypes from 'prop-types'

const Group = ({children, id, className, style}) => {
    const classList = ("bg-secondary text-white p-3 rounded " + className).trim();
    return (
        <div id={id} className={classList} style={style} >
            {children}
        </div>
    )
}

Group.proptTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

Group.defaultProps = {
    className: "",
    style: {}
}

export default Group
