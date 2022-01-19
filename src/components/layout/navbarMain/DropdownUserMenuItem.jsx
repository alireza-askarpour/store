import PropTypes from 'prop-types'

const DropdownUserMenuItem = ({ icon, content }) => {
  return (
    <div className="dropdown-user-menu-item">
      {icon}
      <span>{content}</span>
    </div>
  )
}

DropdownUserMenuItem.propTypes = {
  icon: PropTypes.object,
  content: PropTypes.string,
  route: PropTypes.string,
}

export default DropdownUserMenuItem
