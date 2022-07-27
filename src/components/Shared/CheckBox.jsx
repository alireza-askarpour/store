import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { checkTwo } from '../../assets/icons'

const Checkbox = ({ onChange, checked, label }) => {
  const inputRef = useRef(null)

  const handleChange = () => onChange && onChange(inputRef.current)

  return (
    <label className="checkbox">
      <input type="checkbox" ref={inputRef} onChange={handleChange} checked={checked} />
      {checkTwo}
      <span>{label}</span>
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox
