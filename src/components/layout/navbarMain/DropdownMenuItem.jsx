import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import QuantityInput from '../../shared/QuantityInput'
import { x } from '../../../assets/icons'

const DropdownMenuItem = (props) => {
    const { notificationItem, cartItem, icon, title, text, price, brand, image, color } = props
    
    return (
        <div className="dropdown-menu-item">
            {
                notificationItem && icon && title && text && color &&  (
                    <div className="notification-item">
                        <div className={`notification-item-avatar ${color}`}>
                            {icon}
                        </div>
                        <div className="notification-item-body">
                            <p className="notification-item-title">
                                {title}
                            </p>
                            <small className="notification-item-text">
                                {text}
                            </small>
                        </div>
                    </div>
                )
            }
            {
                cartItem && image && price && brand &&  (
                    <div className="cart-item">
                        <div className="cart-item-img">
                            <img src={image} alt={""} />
                        </div>
                        <div className="cart-item-body">
                            <div className="cart-item-heading">
                                <h6 className="cart-item-title">
                                    <Link to={'/'}>Apple iMac 27-inch</Link>
                                </h6>
                                <small className="cart-item-brand">{brand}</small>
                            </div>
                            <div className="cart-item-qty">
                                <QuantityInput
                                    inc={() => {}}
                                    dec={() => {}}
                                    qty={10}
                                />
                            </div>
                            <div className="cart-item-price">
                                <h5>
                                    {price}
                                </h5>
                            </div>
                            <div className="cart-item-remove">
                                {x}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

DropdownMenuItem.propTypes = {
    notificationItem: PropTypes.bool,
    cartItem: PropTypes.bool,
    icon: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    color: PropTypes.string
}

export default DropdownMenuItem
