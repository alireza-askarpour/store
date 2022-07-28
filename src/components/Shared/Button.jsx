import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'utils/classNames'

const Button = ({
  children,
  txtColor,
  bgColor,
  btnBlock,
  roundedFull,
  roundedNone,
  size,
  click,
  stock,
  btnBorder,
  type,
  bold,
}) => {
  const handleClick = click ? click : null

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'btn',
        bgColor ? `bg-${bgColor}` : 'bg-main',
        txtColor ? `color-${txtColor}` : 'color-main',

        roundedFull && 'full-rounded',
        roundedNone && 'none-rounded',

        size === 'large' && 'btn-large',
        size === 'small' && 'btn-small',
        size === 'xs' && 'btn-xs',

        bold && 'btn-bold',
        stock && 'unavailable',
        btnBlock && 'btn-block',
        btnBorder && `border-${btnBorder}`,
      )}
      type={type ? type : 'button'}
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
  btnBorder: PropTypes.string,
  btnType: PropTypes.string,
  bold: PropTypes.bool,
}

export default Button
