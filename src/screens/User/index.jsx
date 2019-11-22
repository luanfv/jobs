import React, {useState} from 'react'
import Header from './../../components/Header'
import InfoUser from './../../components/InfoUser'
import {localApi} from './../../services/api'
import {MainLoaderStyle} from './../../themes/styled'
import CircularProgress from '@material-ui/core/CircularProgress'
import {Redirect} from 'react-router-dom'

export default (props) => {
    document.title = 'Nave.rs | Vaga'

    const [user, setUser] = useState('')
    const [isError, setIsError] = useState(false)
    
    const handleUser = async () => {
        await localApi.get(`/users/${props.match.params.id}`)
        .then((response) => setUser(response.data))
        .catch(() => setIsError(true))
    }

    if(isError) {
        return <Redirect to='/error' />
    }

    if(user === '') {
        handleUser()
    }

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
 
    return (
        <div>
            <Header />
            <InfoUser infoUser={user} />
        </div>
    ) 
}