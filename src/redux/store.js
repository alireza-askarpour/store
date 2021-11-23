import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { productsListReducer, productDetailsReducer } from './reducers/products'
import { filtersReducer } from './reducers/filters'
import { cartReducer } from './reducers/cart'

const reducer = combineReducers({
    productsList: productsListReducer,
    filters: filtersReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialeState = {
    cart: { cartItems: cartItemsStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialeState, applyMiddleware(...middleware))

export default store