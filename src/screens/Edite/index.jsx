import React, {useState, useEffect} from 'react'
import {MainLoaderStyle} from './../../themes/styled'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from './../../components/Header'
import Edite from './../../components/EditeUser'
import {localApi} from './../../services/api'

export default (props) => {
    const id = props.match.params.id
    const [infoUser, setInfoUser] = useState('')

    const handleUser = async () => {
        const response = await localApi.get(`/users/${id}`)
        setInfoUser(response.data)
    }

    useEffect(() => {
        handleUser()
    }, [])

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