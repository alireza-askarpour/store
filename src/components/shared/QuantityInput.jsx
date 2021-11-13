import React from 'react'

import { plus, minus} from '../../assets/icons'

const QuantityInput = ({ qty, inc, dec }) => {
    return (
        <div className="quantity-input">
            <button onClick={dec} type="button">{minus}</button>
            <small>1</small>
            <button onClick={inc} type="button">{plus}</button>
        </div>
    )
}

export default QuantityInput
