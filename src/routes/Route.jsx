import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../screens/Home'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route excat path='/' component={Home} />
        </Switch>
    </BrowserRouter>
)