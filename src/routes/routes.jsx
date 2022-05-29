import { Routes as Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Products from '../containers/Products'
import ProductDetails from '../containers/ProductDetails'
import Cart from '../containers/Cart'
import Checkout from '../containers/Checkout'
import Wishlist from '../containers/Wishlist'
import PageLayouts from '../containers/PageLayouts'
import NotFound from '../containers/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/page-layouts" element={<PageLayouts />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  )
}

export default Routes
