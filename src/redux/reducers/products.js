import * as types from '../types'

// Products List

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

// Filter List

const initialState = {
    multiRange: 'all',
    category: [],
    brand: [],
    rating: null,
    stock: false,
    sort: 'featured',
    search: '', 
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_BY_MULTI_RANGE:
            return { ...state, multiRange: action.payload }

        case types.FILTER_BY_CATEGORY:
            if (action.checked) {
                return { ...state, category: [...state.category, action.payload.category] }
            } else {
                const updatedCategory = state.category.filter(item => item !== action.payload.category)
                return { ...state, category: updatedCategory }
            }

        case types.FILTER_BY_BRAND:
            if (action.checked) {
                return { ...state, brand: [...state.brand, action.payload.brand] }
            } else {
                const updatedBrand = state.brand.filter(item => item !== action.payload.brand)
                return { ...state, brand: updatedBrand }
            }

        case types.FILTER_BY_RATING:
            return { ...state, rating: action.payload }

        case types.FILTER_BY_STOCK:
            if (action.checked) {
                return { ...state, stock: true }
            } else {
                return { ...state, stock: false }
            }

        case types.FILTER_BY_SEARCH:
            return { ...state, search: action.payload }

        case types.SORT_BY_PRICE:
            return { ...state, sort: action.payload } 

        case types.CLEAR_FILTERS:
            return initialState

        default: 
            return state
    }
}

// Product Details

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
