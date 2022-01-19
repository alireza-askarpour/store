import * as types from '../types'

export const wishlistReucer = (state = { wishlist: [] }, action) => {
  switch (action.type) {
    case types.WISHLIST_ADD_ITEM:
      const item = action.paylod
      const existingItem = state.wishlist.find((i) => i.id === item.id)

      if (existingItem) {
        return {
          ...state,
          wishlist: state.wishlist.filter((i) => i.id !== existingItem.id),
        }
      } else {
        return {
          ...state,
          wishlist: [...state.wishlist, item],
        }
      }

    default:
      return state
  }
}
