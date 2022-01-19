import * as types from '../types'

export const wishlistAction = (item) => (dispatch, getState) => {
  dispatch({ type: types.WISHLIST_ADD_ITEM, paylod: item })

  localStorage.setItem('wishlist', JSON.stringify(getState().wishlist.wishlist))
}
