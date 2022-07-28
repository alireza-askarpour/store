import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../Shared/Button'
import RatingsList from '../../Shared/RatingsList'
import numberWithCommas from 'utils/numberWithCommas'

import { x } from 'assets/icons'

const WishlistCard = ({ item, leftBtnClick }) => {
  const { id, price, name, description, rating, inStock } = item

  const image = item.images[0]
  const link = `/product/${id}`
  const brand = item.brand.replace('-', ' ')

  return (
    <div className="wishlist-card">
      <div className="wishlist-card-image">
        <Link to={link}>
          <img src={image} className="cart-img" alt={name} />
        </Link>
      </div>

      <div className="wishlist-card-body">
        <div className="wishlist-card-meta">
          <RatingsList rating={rating} small />
          {inStock ? (
            <h5 className="wishlist-card-price">{numberWithCommas(price)}</h5>
          ) : (
            <span className="wishlist-card-unavailable">Unavailable</span>
          )}
        </div>
        <h3 className="wishlist-card-heading">
          <Link to={link}>
            <span className="wishlist-card-title">{name}</span>
          </Link>
          <p className="wishlist-card-brand">
            By <span>{brand}</span>
          </p>
        </h3>
        <p className="wishlist-card-description">{description}</p>
      </div>

      <div className="wishlist-card-options">
        <div className="card-price-wrapper">
          {inStock ? (
            <h4 className="card-price">{numberWithCommas(price)}</h4>
          ) : (
            <span className="card-unavailable">Unavailable</span>
          )}
        </div>

        <div className="card-btn-left">
          <Button
            btnBlock
            size="small"
            bgColor="custom"
            txtColor="custom"
            roundedNone
            click={leftBtnClick}
            bold
          >
            {x} Remove
          </Button>
        </div>

        <div className="card-btn-cart">
          <Link to={link}>
            <Button btnBlock size="small" stock={!inStock} roundedNone bold>
              {inStock ? 'View in Cart' : 'Unavailable'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WishlistCard
