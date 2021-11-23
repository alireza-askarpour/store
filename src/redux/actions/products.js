import axios from '../../config/instance'
import * as types from '../types'

export const productsAction = () => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_LIST_REQUEST })
        
        const { data } = await axios.get('/products')

        dispatch({ type: types.PRODUCT_LIST_SUCCESS, payload: data, })
        
    } catch (err) {
        console.log(err)
    }
}

export const productDetailsAction = (id) => async (dispatch) => {
    dispatch({ type: types.PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/products/${id}`)

    dispatch({ type: types.PRODUCT_DETAILS_SUCCESS, payload: data })
}
