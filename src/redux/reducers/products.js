import * as types from '../types'

export const productsListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case types.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }

    case types.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.paylod }

    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case types.PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: null }

    case types.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.paylod }

    default:
      return state
  }
}

export const searchProductsReducer = (state = { pages: [], products: [] }, action) => {
  switch (action.type) {
    case types.SEARCHـPRODUCTS:
      const search = action.paylod.search
      const pages = action.paylod.pages
      const products = action.paylod.products

      const filteredPages = pages.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase()),
      )
      const filteredProducts = products.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase()),
      )

      return { pages: filteredPages, products: filteredProducts }

    default:
      return state
  }
}
