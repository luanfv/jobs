import React from 'react'
import Header from './../../components/Header'
import Register from './../../components/Register'

export default () => {
    document.title = 'Nave.rs | Cadastro'
    
    return (
        <div>
            <Header />
            <Register />
        </div>
    )
}