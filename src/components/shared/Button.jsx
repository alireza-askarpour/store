import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({ children, txtColor, bgColor, btnBlock, link, roundedFull, roundedNone, size }) => {
    const bg = bgColor ? `bg-${bgColor}` : 'bg-main'
    const color = txtColor ? `color-${txtColor}` : 'color-main'
    const block = btnBlock ? 'btn-block' : ''
    const btnSize = size === 'large' ? 'btn-large' : (size === 'small' ? 'btn-small' : (size === 'xs' ? 'btn-xs' : ''))
    const fullRounded = roundedFull ? 'full-rounded' : ''
    const noneRounded = roundedNone ? 'none-rounded' : ''

    return (
        <>
            {
                link ? (
                    <Link to={link}>
                        <button className={`btn ${color} ${bg} ${block} ${fullRounded} ${noneRounded} ${btnSize}`}>
                            {children}
                        </button>
                    </Link>
                ) : (
                    <button className={`btn ${color} ${bg} ${block} ${fullRounded} ${noneRounded} ${btnSize}`}>
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
    size: PropTypes.string
}

export default Button
