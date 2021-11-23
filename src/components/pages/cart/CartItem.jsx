import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from '../../shared/Button'
import RatingsList from '../../shared/RatingsList'
import numberWithCommas from '../../../utils/numberWithCommas'

import { x } from '../../../assets/icons'
import QuantityInput from '../../shared/QuantityInput'

const CartItem = ({ 
    brand, 
    color, 
    id, 
    img, 
    title, 
    price, 
    quantity, 
    stock, 
    link, 
    rating, 
    removeFromCart, 
    freeShopping 
}) => {
    
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={img} className="cart-img" alt={title} />
            </div>
            <div className="cart-item-body">
                <h3 className="cart-item-heading">
                    <Link to={link}>
                        <span className="cart-item-title">{title}</span>
                    </Link>
                </h3>
                <p className="cart-item-brand">By <span>{brand}</span></p>
                <div className="cart-item-rating">
                    <RatingsList rating={rating} small/>
                </div>
                <p className={`cart-item-status ${stock ? 'color-green' : 'color-red'}`}>
                    {stock ? 'In Stock' : 'Unavailable'}
                </p>
                <div className="cart-item-color">
                    <span>Color:</span>
                    <span className={`color bg-${color}`}></span>
                </div>
                <div className="cart-item-quantity">
                    <span>Qty:</span>
                    <QuantityInput
                        qty={quantity}
                        updateQty={() => {}}
                    />  
                </div>
            </div>
            <div className="cart-item-options">
                <div className="card-price-wrapper">
                    {
                        stock 
                        ?   <h4 className="card-price">{numberWithCommas(price)}</h4>
                        :   <span className="card-unavailable">Unavailable</span>
                    }
                </div>
                {
                    freeShopping && <div className="cart-badge">Free Shipping</div>
                } 
                <div className="card-btn-wishlist">
                    <Button 
                        btnBlock 
                        size="small" 
                        bgColor="custom" 
                        txtColor="custom"
                        click={removeFromCart}
                    >
                        {x}
                        Remove
                    </Button>
                </div>
                <div className="card-btn-cart">
                    <Button btnBlock size="small" stock={!stock}>
                        { stock ? 'View in Cart': 'Unavailable' }
                    </Button>
                </div>
            </div>
        </div>
    )
}

CartItem.prototype = {
    brand: PropTypes.string, 
    color: PropTypes.string, 
    id: PropTypes.string, 
    img: PropTypes.string, 
    title: PropTypes.string, 
    price: PropTypes.string, 
    quantity: PropTypes.string, 
    stock: PropTypes.string, 
    link: PropTypes.string, 
    rating: PropTypes.string, 
    removeFromCart: PropTypes.string, 
    freeShopping: PropTypes.string,
}

export default CartItem