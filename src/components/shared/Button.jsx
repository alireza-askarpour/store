import React from 'react'
import PropTypes from 'prop-types'

const Button = (
    { 
        children, 
        txtColor, 
        bgColor, 
        btnBlock, 
        roundedFull, 
        roundedNone, 
        size, 
        click, 
        stock ,
        btnBorder
    }
) => {

    const bg = bgColor ? `bg-${bgColor}` : 'bg-main'
    const color = txtColor ? `color-${txtColor}` : 'color-main'
    const block = btnBlock ? 'btn-block' : ''
    const border = btnBorder ? `border-${btnBorder}` : ''
    const btnSize = size === 'large' ? 'btn-large' : (size === 'small' ? 'btn-small' : (size === 'xs' ? 'btn-xs' : ''))
    const fullRounded = roundedFull ? 'full-rounded' : ''
    const noneRounded = roundedNone ? 'none-rounded' : ''
    const unavailable = stock ? 'unavailable' : ''

    const handleClick = click ? click : null

    return (
        <button 
            onClick={handleClick} 
            className={`
                btn 
                ${color} 
                ${bg} 
                ${fullRounded} 
                ${noneRounded} 
                ${btnSize} 
                ${unavailable}
                ${border}
                ${block}`
            }
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    txtColor: PropTypes.string, 
    bgColor: PropTypes.string, 
    btnBlock: PropTypes.bool, 
    roundedFull: PropTypes.bool,
    roundedNone: PropTypes.bool,
    size: PropTypes.string,
    stock: PropTypes.bool,
    click: PropTypes.func,
    btnBorder: PropTypes.string
}

export default Button
