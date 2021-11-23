import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
            <Link to="/cart">
                <Button btnBlock>
                    {title}
                </Button>
            </Link>
        </div>
    )
}

DropdownMenuFooter.propTypes = {
    title: PropTypes.string,
    total: PropTypes.string,
}

export default DropdownMenuFooter
