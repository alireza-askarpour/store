import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { productsListReducer, productDetailsReducer } from './reducers/products'
import { filtersReducer } from './reducers/filters'
import { cartReducer } from './reducers/cart'
import { wishlistReucer } from './reducers/wishlist'

const reducer = combineReducers({
    productsList: productsListReducer,
    filters: filtersReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    wishlist: wishlistReucer,
})

const cartItemsStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const wishlistStorage = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []

const initialeState = {
    cart: { cartItems: cartItemsStorage },
    wishlist: { wishlist: wishlistStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialeState, applyMiddleware(...middleware))

export default store