import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {MessageStyle} from './style'
import {MainLoaderStyle} from './../../themes/styled'

export default () => {
    const [redirection, setRedirection] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setRedirection(true)
        }, 3000)
    })

    if(redirection) {
        return <Redirect to='/' />
    }

    return (
        <MainLoaderStyle>
            <MessageStyle>
                <h3>Ação realizada com</h3>
                <h1>SUCESSO</h1>
            </MessageStyle>
        </MainLoaderStyle>
    )
}