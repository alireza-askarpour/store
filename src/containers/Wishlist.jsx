import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { wishlistAction } from "../redux/actions/wishlist" 

import BreadcrumbsTop from '../components/shared/BreadcrumbsTop'
import ProductCard from '../components/shared/ProductCard' 

import { x } from '../assets/icons'

const Wishlist = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.wishlist)
    const { wishlist } = state

    const handleWishlist = (item) => dispatch(wishlistAction(item))

    return (
        <div className="wishlist">
            <div className="content-header">
                <BreadcrumbsTop title="Wishlist"/>
            </div>
            <div className="content-main">
                <div className="wishlist-items grid grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
                    {
                        wishlist.map((item, index) => (
                            <ProductCard
                                key={index}
                                id={item.id}
                                image={item.images[0]}
                                price={item.price} 
                                title={item.name} 
                                description={item.description} 
                                rating={item.rating}
                                link={`/product/${item.id}`}
                                brand={item.brand.replace('-', ' ')}
                                inStock={item.inStock}
                                leftBtnClick={() => handleWishlist(item)}
                                rightBtnLink={`/product/${item.id}`}
                                leftBtnText={<>{x} Remove</>}
                            />
                        ))
                    }
                </div>
                {
                    wishlist.length === 0 && <p className="empty-text">Your wishlist is empty</p>
                }
            </div>
        </div>
    )
}

export default Wishlist
