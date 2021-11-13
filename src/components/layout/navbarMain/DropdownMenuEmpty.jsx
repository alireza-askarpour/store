import React from 'react'
import PropTypes from 'prop-types'

const DropdownMenuEmpty = ({ text }) => {
    return (
        <p className="dropdown-menu-empty">{text}</p>
    )
}
    
DropdownMenuEmpty.propTypes = {
    text: PropTypes.string
}

export default DropdownMenuEmpty
