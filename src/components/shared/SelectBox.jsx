import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/classNames'
import { chevronDown } from '../../assets/icons'

const handleClick = (menu, field) => {
  document.addEventListener('click', (e) => {
    if (field.current && field.current.contains(e.target)) {
      menu.current.classList.add('active')
    } else {
      if (menu.current) {
        menu.current.classList.remove('active')
      }
    }
  })
}

const SelectBox = ({ menuData, value, onClick, size, color, selectBlock }) => {
  const selectFieldRef = useRef(null)
  const selectMenuRef = useRef(null)

  handleClick(selectMenuRef, selectFieldRef)

  return (
    <div className={classNames('selector', size && size)}>
      <div
        ref={selectFieldRef}
        className={classNames(
          'select-field',
          color && color,
          selectBlock && 'select-block',
        )}
      >
        <span className="select-text">{value}</span>
        {chevronDown}
      </div>
      <ul ref={selectMenuRef} className="select-menu">
        {menuData.map((item, index) => (
          <li key={index} className="option" onClick={() => onClick(item)}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

SelectBox.propTypes = {
  menuData: PropTypes.array,
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  selectBlock: PropTypes.bool,
}

export default SelectBox
