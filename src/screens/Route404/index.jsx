import React, {useEffect} from 'react'
import Header from './../../components/Header'
import Error404 from './../../components/Error404'

export default () => {
    useEffect(() => {
        document.title = 'Nave.rs | 404'
    }, [])

    return (
        <div>
            <Header />
            <Error404 />
        </div>
    )
}