import { Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Products from '../containers/Products'
import ProductDetails from '../containers/ProductDetails'
import Cart from '../containers/Cart'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/products" component={Products} exact/>
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}

export default Routes
