import axios from 'config/axios'
import * as types from '../types'

export const productsAction = () => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/products')

    dispatch({ type: types.PRODUCT_LIST_SUCCESS, paylod: data })
  } catch (err) {
    console.log(err)
  }
}

export const productDetailsAction = (id) => async (dispatch) => {
  dispatch({ type: types.PRODUCT_DETAILS_REQUEST })

  const { data } = await axios.get(`/products/${id}`)

  dispatch({ type: types.PRODUCT_DETAILS_SUCCESS, paylod: data })
}

export const searchProductsAction = (search, pages, products) => (dispatch) => {
  dispatch({ type: types.SEARCHـPRODUCTS, paylod: { search, pages, products } })
}
