import React from 'react'
import {HeaderStyle} from './style'
import logo from './../../images/logo.png'
import {Link} from 'react-router-dom'

export default () => (
    <HeaderStyle>
        <Link to='/'>
            <img src={logo} alt='img' />
        </Link>
    </HeaderStyle>
)
