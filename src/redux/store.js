import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { productsListReducer, filtersReducer } from './reducers/products'

const reducer = combineReducers({
    productsList: productsListReducer,
    filters: filtersReducer
})

const initialeState = {}

const middleware = [thunk]

const store = createStore(reducer, initialeState, applyMiddleware(...middleware))

export default store