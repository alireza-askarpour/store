import * as types from '../types'

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