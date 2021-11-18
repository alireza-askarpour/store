import { Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Products from '../containers/Products'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/products" component={Products} exact/>
        </Switch>
    )
}

export default Routes
