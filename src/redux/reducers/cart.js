import * as types from '../types'

const initialState = { cartItems: [] }

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CART_ADD_ITEM:
            const item = action.paylod
            const duplicate = state.cartItems.filter(i => i.brand === item.brand && i.color === item.color)

            if (duplicate.length > 0) {
                const itemIndex = state.cartItems.findIndex(i => i.id === duplicate[0].id && i.color === duplicate[0].color)
                
                const cartItemsUpdated = [...state.cartItems]
                const priveCount = state.cartItems[itemIndex]
                priveCount.quantity = priveCount.quantity + item.quantity
                cartItemsUpdated[itemIndex] = priveCount

                return { cartItems: cartItemsUpdated }

            } else {
                if (!item.stock)  {
                    return {
                        ...state
                    }

                } else {
                    return {
                        ...state, 
                        cartItems: [ ...state.cartItems, item] 
                    }
                }   
            }

        case types.CART_UPDATE_ITEM:
            const itemUpdate = action.paylod

            // const item = state.cartItems.filter(i => i.brand === itemUpdate.brand && i.color === itemUpdate.color)

            // if (item.length > 0) {
                
            // }

        case types.CART_REMOVE_ITEM:
            console.log(action.paylod.color)

            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.id !== action.paylod.id && i.color !== action.paylod.color)
            }
    
        default:
            return state
    }
}
