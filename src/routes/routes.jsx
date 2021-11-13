import { Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
        </Switch>
    )
}

export default Routes
