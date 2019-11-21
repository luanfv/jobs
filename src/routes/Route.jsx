import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './../screens/Home'
import User from './../screens/User'
import Register from './../screens/Register'
import Edite from './../screens/Edite'
import Route404 from './../screens/Route404'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user/:id' component={User} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/edite/:id' component={Edite} />
            <Route path='*' component={Route404} />
        </Switch>
    </BrowserRouter>
)