import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ onChange, checked, label, id }) => {
  const inputRef = useRef(null)

  const handleChange = () => onChange && onChange(inputRef.current)

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={handleChange}
        checked={checked}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string,
}

export default ToggleSwitch
