import * as types from '../types'

export const addToCartAction = (item) => async (dispatch, getState) => {
    dispatch({
        type: types.CART_ADD_ITEM,
        paylod: item
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCartAction = (id, color) => async (dispatch, getState) => {
    dispatch({
        type: types.CART_REMOVE_ITEM,
        paylod: {
            id,
            color
        }
    })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
