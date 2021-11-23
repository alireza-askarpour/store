import * as types from '../types'

export const productsListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case types.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case types.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }

        default:
            return state
    }
}

export const productDetailsReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case types.PRODUCT_DETAILS_REQUEST:
            return { loading: true , product: [] }

        case types.PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }

        default:
            return state
    }
}
