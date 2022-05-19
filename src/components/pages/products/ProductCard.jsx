import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import Button from '../../shared/Button'
import RatingsList from '../../shared/RatingsList'
import numberWithCommas from '../../../utils/numberWithCommas'

import { useLayout } from '../../../providers/layout'
import { classNames } from '../../../utils/classNames'
import { heart } from '../../../assets/icons'

const ProductCard = ({
  id,
  image,
  price,
  name,
  description,
  rating,
  link,
  brand,
  inStock,
  addToWishlist,
}) => {
  const { wishlist } = useSelector((state) => state.wishlist)

  const { pathname } = useLocation()
  const { productsListLayout } = useLayout()

  const like = wishlist.some((i) => i.id === id)

  const cardBtnLeft =
    pathname === '/products' && like ? 'card-btn-left like' : 'card-btn-left'

  return (
    <div
      className={classNames(
        productsListLayout === 'grid' ? 'product-card' : 'product-card row',
      )}
    >
      <div className="product-card-image">
        <Link to={link}>
          <img src={image} className="cart-img" alt={name} />
        </Link>
      </div>

      <div className="product-card-body">
        <div className="product-card-meta">
          <RatingsList rating={rating} small />
          {inStock ? (
            <h5 className="product-card-price">{numberWithCommas(price)}</h5>
          ) : (
            <span className="product-card-unavailable">Unavailable</span>
          )}
        </div>
        <h3 className="product-card-heading">
          <Link to={link}>
            <span className="product-card-title">{name}</span>
          </Link>
          <p className="product-card-brand">
            By <span>{brand}</span>
          </p>
        </h3>
        <p className="product-card-description">{description}</p>
      </div>

      <div className="product-card-options">
        <div className="card-price-wrapper">
          {inStock ? (
            <h4 className="card-price">{numberWithCommas(price)}</h4>
          ) : (
            <span className="card-unavailable">Unavailable</span>
          )}
        </div>

        <div className={cardBtnLeft}>
          <Button
            btnBlock
            roundedNone={productsListLayout === 'grid'}
            size="small"
            bgColor="custom"
            txtColor="custom"
            click={addToWishlist}
            bold
          >
            {heart} Wishlist
          </Button>
        </div>

        <div className="card-btn-cart">
          <Link to={`/product/${id}`}>
            <Button
              btnBlock
              roundedNone={productsListLayout === 'grid'}
              size="small"
              stock={!inStock}
              bold
            >
              {inStock ? 'View in Cart' : 'Unavailable'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
