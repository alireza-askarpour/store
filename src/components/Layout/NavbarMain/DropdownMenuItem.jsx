import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import QuantityInput from '../../Shared/QuantityInput'

import { x } from 'assets/icons'

const DropdownMenuItem = (props) => {
  const {
    notificationItem,
    cartItem,
    icon,
    title,
    text,
    price,
    brand,
    image,
    color,
    item,
    updateQuantity,
    removeFromCart,
  } = props

  const handleUpdateQuantity = (type) => updateQuantity(type, item)
  const handleRemoveFromCart = () => removeFromCart(item.id, item.color, item.category)

  return (
    <div className="dropdown-menu-item">
      {notificationItem && icon && title && text && color && (
        <div className="notification-item">
          <div className={`notification-item-avatar ${color}`}>{icon}</div>
          <div className="notification-item-body">
            <p className="notification-item-title">{title}</p>
            <small className="notification-item-text">{text}</small>
          </div>
        </div>
      )}
      {cartItem && image && price && brand && title && (
        <div className="dropdown-cart-item">
          <div className="dropdown-cart-item-img">
            <img src={image} alt={title} />
          </div>
          <div className="dropdown-cart-item-body">
            <div className="dropdown-cart-item-heading">
              <h6 className="dropdown-cart-item-title">
                <Link to={'/'}>
                  <span>{title}</span>
                </Link>
              </h6>
              <small className="dropdown-cart-item-brand">{brand}</small>
            </div>
            <div className="dropdown-cart-item-qty">
              <QuantityInput qty={item.quantity} updateQty={handleUpdateQuantity} />
            </div>
            <div className="dropdown-cart-item-price">
              <h5>{price}</h5>
            </div>
            <div className="dropdown-cart-item-remove" onClick={handleRemoveFromCart}>
              {x}
            </div>
          </div>
        </div>
      )}
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
  item: PropTypes.object,
  color: PropTypes.string,
  updateQuantity: PropTypes.func,
  removeFromCart: PropTypes.func,
}

export default DropdownMenuItem
