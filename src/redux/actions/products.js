import axios from '../../config/instance'
import * as types from '../types'

// fetch products data from api
export const productsAction = () => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_LIST_REQUEST })
        
        const { data } = await axios.get('/products')

        dispatch({ type: types.PRODUCT_LIST_SUCCESS, payload: data, })
        
    } catch (err) {
        console.log(err)
    }
}

// Filter and sort products, and clear filter

export const filterMultiRangeAction = (multiRange) => (dispatch) => {
    dispatch({ type: types.FILTER_BY_MULTI_RANGE, payload: multiRange })
}

export const filterCategoryAction = (category, checked) => (dispatch) => {
    dispatch({ type: types.FILTER_BY_CATEGORY, payload: category, checked })
}

export const filterBrandAction = (brand, checked) => (dispatch) => {
    dispatch({ type: types.FILTER_BY_BRAND, payload: brand, checked })
}

export const filterRatingAction = (rating) => (dispatch) => {
    dispatch({ type: types.FILTER_BY_RATING, payload: rating })
}

export const filterStockAction = (checked) => (dispatch) => {
    dispatch({ type: types.FILTER_BY_STOCK, checked })
}

export const filterSearchAction = (search) => (dispatch) => {
    dispatch({ type: types.FILTER_BY_SEARCH, payload: search })
}

export const sortPriceAction = (sort) => (dispatch) => {
    dispatch({ type: types.SORT_BY_PRICE, payload: sort })
}

export const clearFiltersAction = () => (dispatch) => {
    dispatch({ type: types.CLEAR_FILTERS })
}

// fetch product details data from api

export const productDetailsAction = (id) => async (dispatch) => {
    dispatch({ type: types.PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/products/${id}`)

    dispatch({ type: types.PRODUCT_DETAILS_SUCCESS, payload: data })
}
