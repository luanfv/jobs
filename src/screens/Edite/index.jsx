import React, {useState, useEffect} from 'react'
import {MainLoaderStyle} from './../../themes/styled'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from './../../components/Header'
import Edite from './../../components/EditeUser'
import {localApi} from './../../services/api'
import {Redirect} from 'react-router-dom'

export default (props) => {
    document.title = 'Nave.rs | Edição'

    const id = props.match.params.id
    const [infoUser, setInfoUser] = useState('')
    const [isError, setIsError] = useState(false)

    const handleUser = async () => {
        await localApi.get(`/users/${id}`)
        .then(response => setInfoUser(response.data))
        .catch(() => setIsError(true))
    }

    useEffect(() => {
        if(infoUser === '')
            handleUser()
    })

    if(isError) {
        return <Redirect to='/error' />
    }

    if(infoUser === '') {
        return (
            <div>
                <Header />
                <MainLoaderStyle>
                    <CircularProgress />
                </MainLoaderStyle>
            </div>
        )
    }

    return (
        <div>
            <Header />
            <Edite infoUser={infoUser} />
        </div>
    )
}