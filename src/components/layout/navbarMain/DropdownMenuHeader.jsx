import React from 'react'
import PropTypes from 'prop-types'

const DropdownMenuHeader = ({ heading, badge }) => {
    return (
        <div className="dropdown-menu-header">
            <h4 className="title">
                {heading}
            </h4>
            <span className="badge">
                {badge}
            </span>
        </div>
    )
}

DropdownMenuHeader.propTypes = {
    heading: PropTypes.string,
    badge: PropTypes.string,
}

export default DropdownMenuHeader
