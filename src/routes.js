import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Holders from './pages/Holders'

import Landing from './pages/Landing'
import CreateAccount from './pages/Landing/CreateAccount'
import Reports from './pages/Reports'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/createaccount" component={CreateAccount} />
                <Route path="/acionistas" component={Holders} />                
                <Route path="/reports" component={Reports} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes