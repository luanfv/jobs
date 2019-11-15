import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './../screens/Home'
import User from './../screens/User'
import Register from './../screens/Register'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user' component={User} />
            <Route exact path='/register' component={Register} />
        </Switch>
    </BrowserRouter>
)