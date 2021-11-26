import { Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Products from '../containers/Products'
import ProductDetails from '../containers/ProductDetails'
import Cart from '../containers/Cart'
import Checkout from '../containers/Checkout'
import Wishlist from '../containers/Wishlist'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/products" component={Products} exact/>
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/wishlist" component={Wishlist} />
        </Switch>
    )
}

export default Routes
