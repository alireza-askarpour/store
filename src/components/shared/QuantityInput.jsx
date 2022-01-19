import React from 'react'
import PropTypes from 'prop-types'

import { plus, minus } from '../../assets/icons'

const QuantityInput = ({ qty, updateQty }) => {
  const handleDecrement = () => updateQty('dec')
  const handleIncrement = () => updateQty('inc')

  return (
    <div className="quantity-input">
      <button onClick={handleDecrement} type="button">
        {minus}
      </button>
      <small>{qty}</small>
      <button onClick={handleIncrement} type="button">
        {plus}
      </button>
    </div>
  )
}

QuantityInput.propTypes = {
  qty: PropTypes.number,
  updateQty: PropTypes.func,
}

export default QuantityInput
