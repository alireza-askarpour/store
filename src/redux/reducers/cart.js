import * as types from '../types'

const initialState = { cartItems: [] }

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CART_ADD_ITEM:
            const newItem = action.paylod
            const duplicate = state.cartItems.filter(i => i.brand === newItem.brand && i.color === newItem.color && i.category === newItem.category)

            if (duplicate.length > 0) {
                const itemIndex = state.cartItems.findIndex(i => i.id === duplicate[0].id && i.color === duplicate[0].color && i.category === newItem.category)
                
                const cartItemsUpdated = [...state.cartItems]
                const priveItem = state.cartItems[itemIndex]
                priveItem.totalPrice = (priveItem.quantity + newItem.quantity) * newItem.price
                priveItem.quantity = priveItem.quantity + newItem.quantity
                cartItemsUpdated[itemIndex] = priveItem

                return { cartItems: cartItemsUpdated }

            } else {
                if (!newItem.stock)  {
                    return {
                        ...state
                    }

                } else {
                    return {
                        ...state, 
                        cartItems: [ ...state.cartItems, newItem] 
                    }
                }   
            }

        case types.CART_UPDATE_ITEM:
            const itemUpdate = action.paylod
            const itemIndex = state.cartItems.findIndex(i => i.id === itemUpdate.id && i.color === itemUpdate.color && i.category === itemUpdate.category)
            
            const cartItemsUpdated = [...state.cartItems]
            const priveItem = state.cartItems[itemIndex]
            priveItem.quantity = itemUpdate.quantity
            priveItem.totalPrice = itemUpdate.quantity * itemUpdate.price
            cartItemsUpdated[itemIndex] = priveItem

            return { cartItems: cartItemsUpdated }
            
        case types.CART_REMOVE_ITEM:
            const delItem = action.paylod

            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.id !== delItem.id || i.color !== delItem.color || i.category !== delItem.category)
            }
    
        default:
            return state
    }
}
