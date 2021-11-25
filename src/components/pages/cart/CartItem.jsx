import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateCartItemAction } from '../../../redux/actions/cart'

import Button from '../../shared/Button'
import RatingsList from '../../shared/RatingsList'
import numberWithCommas from '../../../utils/numberWithCommas'
import QuantityInput from '../../shared/QuantityInput'

import { x } from '../../../assets/icons'

const CartItem = ({ item, removeFromCart }) => {
    const dispatch = useDispatch()

    const { id, brand, color, image, name, quantity, totalPrice, stock, rating, freeShipping } = item

    const updateQuantity = (type) => {
        if (type === 'inc') {
            const qtyLimit = quantity + 1 > 100 ? 100 : quantity + 1
            dispatch(updateCartItemAction({ ...item, quantity: qtyLimit }))
        } else {
            const qtyLimit = quantity - 1 === 0 ? 1 : quantity - 1
            dispatch(updateCartItemAction({ ...item, quantity: qtyLimit }))
        }
    }
    
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={image} className="cart-img" alt={name} />
            </div>
            <div className="cart-item-body">
                <h3 className="cart-item-heading">
                    <Link to={`/product/${id}`}>
                        <span className="cart-item-title">{name}</span>
                    </Link>
                </h3>
                <p className="cart-item-brand">By <span>{brand.replace('-', ' ')}</span></p>
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
                        qty={item.quantity}
                        updateQty={updateQuantity}
                    />  
                </div>
            </div>
            <div className="cart-item-options">
                <div className="card-price-wrapper">
                    {
                        stock 
                        ?   <h4 className="card-price">{numberWithCommas(totalPrice)}</h4>
                        :   <span className="card-unavailable">Unavailable</span>
                    }
                </div>
                {
                    freeShipping && (
                        <p>
                            <span className="cart-badge">Free Shipping</span>
                        </p>
                    )
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
    item: PropTypes.object,
    removeFromCart: PropTypes.func,
}

export default CartItem