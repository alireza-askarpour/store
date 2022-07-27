import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { removeFromCartAction } from '../redux/actions/cart'
import numberWithCommas from '../utils/numberWithCommas'

import Button from '../components/Shared/Button'
import CartItem from '../components/Pages/Cart/CartItem'
import BreadcrumbsTop from '../components/Shared/BreadcrumbsTop'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { cartItems } = useSelector((state) => state.cart)

  const handleRemoveFromCart = (id, color, category) => {
    dispatch(removeFromCartAction(id, color, category))
  }

  const handleClickBtn = () => {
    return cartItems.length > 0 && navigate('/checkout')
  }

  const totalPrice = numberWithCommas(
    cartItems.reduce((acc, item) => acc + item.totalPrice, 0),
  )
  const estimatedTax = cartItems.length * 0.1

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
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                removeFromCart={() =>
                  handleRemoveFromCart(item.id, item.color, item.category)
                }
              />
            ))}
            {cartItems.length === 0 && (
              <p className="cart-empty">Your shopping cart is empty</p>
            )}
          </div>
        </div>
        <div className="cart-options">
          <div className="cart-options-heading">
            <p>Order Summary</p>
          </div>
          <div className="cart-options-content">
            <div className="options">
              <span>Options</span>
            </div>
            <div className="apply-discount">
              <input type="text" placeholder="Coupons" />
              <div className="input-text">
                <span>Apply</span>
              </div>
            </div>
            <div className="price-details">
              <h5 className="price-title">Price Details</h5>
              <ul className="price-details-main">
                <li className="price-detail">
                  <div className="detail-title">Total</div>
                  <div className="detail-amt">
                    {totalPrice && numberWithCommas(totalPrice)}
                  </div>
                </li>
                <li className="price-detail">
                  <div className="detail-title">Bag Discount</div>
                  <div className="detail-amt color-green">$0</div>
                </li>
                <li className="price-detail">
                  <div className="detail-title">Estimated Tax</div>
                  <div className="detail-amt">
                    {cartItems.length > 0 ? numberWithCommas(estimatedTax) : '$0'}
                  </div>
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
                  <div>{totalPrice}</div>
                </h4>
                <Button btnBlock click={handleClickBtn}>
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
