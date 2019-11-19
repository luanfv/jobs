import React, {useEffect} from 'react'
import Header from './../../components/Header'
import Register from './../../components/Register'

export default () => {
    useEffect(() => {
        document.title = 'Nave.rs | Cadastro'
    }, [])
    
    return (
        <div>
            <Header />
            <Register />
        </div>
    )
}