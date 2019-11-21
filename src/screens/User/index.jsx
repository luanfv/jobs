import React, {useState, useEffect} from 'react'
import Header from './../../components/Header'
import InfoUser from './../../components/InfoUser'
import {localApi} from './../../services/api'
import {MainLoaderStyle} from './../../themes/styled'
import CircularProgress from '@material-ui/core/CircularProgress'
import {Redirect} from 'react-router-dom'

export default (props) => {
    const [user, setUser] = useState('')
    
    const getUser = async () => {
        await localApi.get(`/users/${props.match.params.id}`)
        .then((response) => setUser(response.data))
        .catch(() => setUser('error'))
    }

    useEffect(() => {
        document.title = 'Nave.rs | Vaga'
        getUser()
    }, [])

    if(user === '') {
        return (
            <div>
                <Header />
                <MainLoaderStyle>
                    <CircularProgress />
                </MainLoaderStyle>
            </div>
        )
    }

    if(user === 'error') {
        return <Redirect to='/error' />
    }
 
    return (
        <div>
            <Header />
            <InfoUser infoUser={user} />
        </div>
    ) 
}