import * as types from '../types'

export const filterMultiRangeAction = (multiRange) => (dispatch) => {
  dispatch({ type: types.FILTER_BY_MULTI_RANGE, paylod: multiRange })
}

export const filterCategoryAction = (category, checked) => (dispatch) => {
  dispatch({ type: types.FILTER_BY_CATEGORY, paylod: category, checked })
}

export const filterBrandAction = (brand, checked) => (dispatch) => {
  dispatch({ type: types.FILTER_BY_BRAND, paylod: brand, checked })
}

export const filterRatingAction = (rating) => (dispatch) => {
  dispatch({ type: types.FILTER_BY_RATING, paylod: rating })
}

export const filterStockAction = (checked) => (dispatch) => {
  dispatch({ type: types.FILTER_BY_STOCK, checked })
}

export const filterSearchAction = (search) => (dispatch) => {
  dispatch({ type: types.FILTER_BY_SEARCH, paylod: search })
}

export const sortPriceAction = (sort) => (dispatch) => {
  dispatch({ type: types.SORT_BY_PRICE, paylod: sort })
}

export const clearFiltersAction = () => (dispatch) => {
  dispatch({ type: types.CLEAR_FILTERS })
}

export const filterSelectReducer = () => (dispatch, getState) => {
  dispatch({
    type: 'FILTER_SELECT',
    paylod: {
      products: getState().productsList.products,
      filter: getState().filters,
    },
  })
}
