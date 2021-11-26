import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'

import { useLayout } from '../../providers/layout'
import Button from '../shared/Button'
import RatingsList from '../shared/RatingsList'
import numberWithCommas from '../../utils/numberWithCommas'

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
    leftBtnClick,
    rightBtnLink,
    leftBtnText
}) => {
    const state = useSelector(state => state.wishlist)
    const { wishlist } = state

    const { productsListLayout } = useLayout()
    const { pathname } = useLocation()

    const product_card = productsListLayout === 'grid' ? 'product-card' : 'product-card row'
    const rounded_none = productsListLayout === 'grid' ? true : false

    const like = wishlist.some(i => i.id === id)
    
    const cardBtnLeft = pathname === '/products' && like ? 'card-btn-left like' : 'card-btn-left'

    return (
        <div className={product_card}>
            <div className="product-card-image">
                <Link to={link}>
                    <img src={image} className="cart-img" alt={name} />
                </Link>
            </div>
            <div className="product-card-body">
                <div className="product-card-meta">
                    <RatingsList rating={rating} small/>
                    {
                        inStock ? 
                        <h5 className="product-card-price">{numberWithCommas(price)}</h5>
                        : 
                        <span className="product-card-unavailable">Unavailable</span>
                        
                    }
                </div>
                <h3 className="product-card-heading">
                    <Link to={link}>
                        <span className="product-card-title">{name}</span>
                    </Link>
                    <p className="product-card-brand">By <span>{brand}</span></p>
                </h3>
                <p className="product-card-description">{description}</p>
            </div>
            <div className="product-card-options">
                <div className="card-price-wrapper">
                    {
                        inStock ? 
                        <h4 className="card-price">{numberWithCommas(price)}</h4>
                        :
                        <span className="card-unavailable">Unavailable</span>
                        
                    }
                </div>
                <div className={cardBtnLeft}>
                    <Button 
                        btnBlock 
                        roundedNone={rounded_none} 
                        size="small" 
                        bgColor="custom" 
                        txtColor="custom"
                        click={leftBtnClick}
                    >
                        {leftBtnText}
                    </Button>
                </div>
                <div className="card-btn-cart">
                    <Link to={rightBtnLink}>
                        <Button 
                            btnBlock 
                            roundedNone={rounded_none} 
                            size="small" 
                            stock={!inStock}
                        >
                            { inStock ? 'View in Cart': 'Unavailable' }
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
