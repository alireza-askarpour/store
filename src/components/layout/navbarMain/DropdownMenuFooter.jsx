import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from '../../shared/Button'

const DropdownMenuFooter = ({ total, title, link }) => {
  return (
    <div className="dropdown-menu-footer">
      {total && (
        <div className="total">
          <h6>Total:</h6>
          <h6>{total}</h6>
        </div>
      )}
      {link ? (
        <Link to={link}>
          <Button btnBlock>{title}</Button>
        </Link>
      ) : (
        <Button btnBlock>{title}</Button>
      )}
    </div>
  )
}

DropdownMenuFooter.propTypes = {
  title: PropTypes.string,
  total: PropTypes.string,
}

export default DropdownMenuFooter
