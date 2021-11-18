import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import RatingsList from '../../shared/RatingsList'
import Button from '../../shared/Button'
import { useLayout } from '../../../providers/layout'
import numberWithCommas from '../../../utils/numberWithCommas'

import { heart } from '../../../assets/icons'

const ProductCard = ({ img, alt, price, title, description, rating, link, brand, stock }) => {
    const { productsListLayout } = useLayout()

    const product_card = productsListLayout === 'grid' ? 'product-card' : 'product-card row'
    const rounded_none = productsListLayout === 'grid' ? true : false

    return (
        <div className={product_card}>
            <div className="product-card-image">
                <Link to={link}>
                    <img src={img} className="cart-img" alt={alt} />
                </Link>
            </div>
            <div className="product-card-body">
                <div className="product-card-meta">
                    <RatingsList rating={rating} small/>
                    {
                        stock ? (
                            <h5 className="product-card-price">{numberWithCommas(price)}</h5>
                        ) : (
                            <span className="product-card-unavailable">Unavailable</span>
                        )
                    }
                </div>
                <h3 className="product-card-heading">
                    <Link to={link}>
                        <span className="product-card-title">{title}</span>
                    </Link>
                    <p className="product-card-brand">By <span>{brand}</span></p>
                </h3>
                <p className="product-card-description">{description}</p>
            </div>
            <div className="product-card-options">
                <div className="card-price-wrapper">
                    {
                        stock ? (
                            <h4 className="card-price">{numberWithCommas(price)}</h4>
                        ) : (
                            <span className="card-unavailable">Unavailable</span>
                        )
                    }
                </div>
                <div className="card-btn-wishlist">
                    <Button btnBlock roundedNone={rounded_none} size="small" bgColor="custom" txtColor="custom">
                        {heart}
                        Wishlist
                    </Button>
                </div>
                <div className="card-btn-cart">
                    <Button btnBlock roundedNone={rounded_none} size="small" stock={!stock}>
                        { stock ? 'View in Cart': 'Unavailable' }
                    </Button>
                </div>
            </div>
        </div>
    )
}

ProductCard.prototype = {
    img: PropTypes.string,
    alt: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.string,
    link: PropTypes.string,
    brand: PropTypes.string
}

export default ProductCard