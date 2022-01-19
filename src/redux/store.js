import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {
  productsListReducer,
  productDetailsReducer,
  searchProductsReducer,
} from './reducers/products'
import { filtersReducer, filterSelectReducer } from './reducers/filters'
import { cartReducer } from './reducers/cart'
import { wishlistReucer } from './reducers/wishlist'

const reducer = combineReducers({
  productsList: productsListReducer,
  filters: filtersReducer,
  filterSelect: filterSelectReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  wishlist: wishlistReucer,
  searchProducts: searchProductsReducer,
})

const cartItemsStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const wishlistStorage = localStorage.getItem('wishlist')
  ? JSON.parse(localStorage.getItem('wishlist'))
  : []

const initialeState = {
  cart: { cartItems: cartItemsStorage },
  wishlist: { wishlist: wishlistStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialeState, applyMiddleware(...middleware))

export default store
