import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../shared/Button'

const DropdownMenuFooter = ({ total, title, link }) => {
    return (
        <div className="dropdown-menu-footer">
            {
                total && (
                    <div className="total">
                        <h6>Total:</h6>
                        <h6>{total}</h6>
                    </div>
                )
            }
            <Button btnBlock link={link}>
                {title}
            </Button>
        </div>
    )
}

DropdownMenuFooter.propTypes = {
    title: PropTypes.string,
    total: PropTypes.string,
}

export default DropdownMenuFooter
