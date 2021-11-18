import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = (
    { 
        children, 
        txtColor, 
        bgColor, 
        btnBlock, 
        link, 
        roundedFull, 
        roundedNone, 
        size, 
        click, 
        stock 
    }
) => {

    const bg = bgColor ? `bg-${bgColor}` : 'bg-main'
    const color = txtColor ? `color-${txtColor}` : 'color-main'
    const block = btnBlock ? 'btn-block' : ''
    const btnSize = size === 'large' ? 'btn-large' : (size === 'small' ? 'btn-small' : (size === 'xs' ? 'btn-xs' : ''))
    const fullRounded = roundedFull ? 'full-rounded' : ''
    const noneRounded = roundedNone ? 'none-rounded' : ''
    const unavailable = stock ? 'unavailable' : ''

    const handleClick = click ? click : null

    return (
        <>
            {
                link ? (
                    <Link to={link}>
                        <button className={`btn ${color} ${bg} ${block} ${fullRounded} ${noneRounded} ${btnSize} ${unavailable}`}>
                            {children}
                        </button>
                    </Link>
                ) : (
                    <button onClick={handleClick} className={`btn ${color} ${bg} ${block} ${fullRounded} ${noneRounded} ${btnSize} ${unavailable}`}>
                        {children}
                    </button>
                )
            }
        </>
    )
}

Button.propTypes = {
    txtColor: PropTypes.string, 
    bgColor: PropTypes.string, 
    btnBlock: PropTypes.bool, 
    link: PropTypes.string,
    roundedFull: PropTypes.bool,
    roundedNone: PropTypes.bool,
    size: PropTypes.string,
    stock: PropTypes.bool,
    click: PropTypes.func,
}

export default Button
