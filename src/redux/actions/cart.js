import * as types from '../types'

export const addToCartAction = (item) => async (dispatch, getState) => {
    dispatch({
        type: types.CART_ADD_ITEM,
        paylod: {
            ...item,
            totalPrice: item.price * item.quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const updateCartItemAction = (item) => async (dispatch, getState) => {
    dispatch({
        type: types.CART_UPDATE_ITEM,
        paylod: item
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCartAction = (id, color, category) => async (dispatch, getState) => {
    dispatch({
        type: types.CART_REMOVE_ITEM,
        paylod: { 
            id, 
            color, 
            category
        }
    })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
