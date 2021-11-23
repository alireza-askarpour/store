import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeFromCartAction } from '../redux/actions/cart'

import BreadcrumbsTop from '../components/shared/BreadcrumbsTop'
import CartItem from '../components/pages/cart/CartItem'
import Button from '../components/shared/Button'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    const handleRemoveFromCart = (id, color) => dispatch(removeFromCartAction(id, color))
    
    return (
        <div className="cart">
            <div className="content-header">
                <BreadcrumbsTop title="Shopping Cart" />
            </div>
            <div className="content-wrapper grid grid-col-1 grid-col-1 grid-col-lg-3">
                <div className="cart-items">
                    <div className="cart-items-heading">
                        <p>Shopping Cart</p>
                    </div>
                    <div className="cart-items-content">
                        {
                            cartItems.map((item, index) => (
                                <CartItem
                                    key={index}
                                    img={item.image}
                                    alt={item.name}
                                    price={item.price} 
                                    title={item.name} 
                                    description={item.description} 
                                    rating={item.rating}
                                    link={`/product/${item.id}`}
                                    brand={item.brand.replace('-', ' ')}
                                    stock={item.stock}
                                    quantity={item.quantity}
                                    color={item.color}
                                    removeFromCart={() => handleRemoveFromCart(item.id, item.color)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="cart-options">
                    <div className="cart-options-heading">
                        <p>Order Summary</p>
                    </div>
                    <div className="cart-options-content">
                        <span className="options">Options</span>
                        <div className="price-details">
                            <h5 className="price-title">Price Details</h5>
                            <ul className="price-details-main">
                                <li className="price-detail">
                                    <div className="detail-title">Total MRP</div>
                                    <div className="detail-amt">$598</div>
                                </li>
                                <li className="price-detail">
                                    <div className="detail-title">Bag Discount</div>
                                    <div className="detail-amt color-green">-25$</div>
                                </li>
                                <li className="price-detail">
                                    <div className="detail-title">Estimated Tax</div>
                                    <div className="detail-amt">$1.3</div>
                                </li>
                                <li className="price-detail">
                                    <div className="detail-title">EMI Eligibility</div>
                                    <div className="detail-amt color-blue">Details</div>
                                </li>
                                <li className="price-detail">
                                    <div className="detail-title">Delivery Charges</div>
                                    <div className="detail-amt color-green">Free</div>
                                </li>
                            </ul>
                            <div className="price-details-footer">
                                <h4 className="price-detail">
                                    <div>Total</div>
                                    <div>$574</div>
                                </h4>
                                <Button
                                    btnBlock
                                >
                                    Place Order
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
