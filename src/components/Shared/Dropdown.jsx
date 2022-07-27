import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/classNames'

const handleClick = (menu, toggle) => {
  document.addEventListener('click', (e) => {
    if (toggle.current && toggle.current.contains(e.target)) {
      menu.current.classList.add('active')
    } else {
      if (menu.current && !menu.current.contains(e.target)) {
        menu.current.classList.remove('active')
      }
    }
  })
}

const Dropdown = ({
  icon,
  badge,
  color,
  customToggle,
  menuData,
  renderItems,
  renderFooter,
  renderHeader,
  renderEmpty,
  size,
}) => {
  const dropdownToggleRef = useRef(null)
  const dropdownMenuRef = useRef(null)

  handleClick(dropdownMenuRef, dropdownToggleRef)

  return (
    <div className="dropdown">
      <button ref={dropdownToggleRef} className="dropdown-toggle">
        {icon && icon}
        {badge && color && (
          <span className={`dropdown-toggle-badge ${color}`}>{badge}</span>
        )}
        {customToggle && customToggle}
      </button>
      <div
        ref={dropdownMenuRef}
        className={classNames(
          'dropdown-menu',
          size === 'xs' && 'xs',
          size === 'small' && 'small',
        )}
      >
        {renderHeader && renderHeader}
        {menuData && renderItems && (
          <div className="dropdown-menu-items">
            {menuData.map((item, index) => (
              <div key={index}>{renderItems(item, index)}</div>
            ))}
            {menuData.length === 0 && renderEmpty}
          </div>
        )}
        {menuData.length > 0 && renderFooter}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  icon: PropTypes.object,
  badge: PropTypes.string,
  color: PropTypes.string,
  customToggle: PropTypes.object,
  menuData: PropTypes.array,
  renderItems: PropTypes.func,
  renderFooter: PropTypes.object,
  renderHeader: PropTypes.object,
  userMenu: PropTypes.bool,
  size: PropTypes.string,
}

export default Dropdown
