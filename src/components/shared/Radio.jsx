import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Radio = ({ onChange, checked, label, id, name }) => {
  const inputRef = useRef(null)

  const handleChange = () => onChange && onChange(inputRef.current)

  return (
    <>
      <input
        ref={inputRef}
        className="radio-btn"
        type="radio"
        id={id}
        name="radio-group"
        onChange={handleChange}
        checked={checked}
      />
      <label className="radio-label" htmlFor={id}>
        {label}
      </label>
    </>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number,
}

export default Radio
