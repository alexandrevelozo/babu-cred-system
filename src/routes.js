import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Holders from './pages/Holders'

import Landing from './pages/Landing'
import Reports from './pages/Reports'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/acionistas" component={Holders} />                <Route exact path="/acionistas" component={Holders} />
                <Route exact path="/reports" component={Reports} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes