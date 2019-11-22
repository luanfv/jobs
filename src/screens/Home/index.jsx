import React, {useState} from 'react'
import {FlexBox, TitleListStyle, ButtonStyle} from './style'
import {MainStyle, MainLoaderStyle} from '../../themes/styled'
import Header from './../../components/Header'
import Table from './../../components/Table'
import {Link, Redirect} from 'react-router-dom'
import {localApi} from './../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'

export default () => {
    document.title = 'Nave.rs | Home'

    const [users, setUsers] = useState('')
    const [isError, setIsError] = useState(false)

    const handleUsers = async () => {
        await localApi.get('/users')
        .then((response) => setUsers(response.data))
        .catch(() => setIsError(true))
    }

    if(isError) {
        return <Redirect to='/error' />
    }

    if(users === '') {
        handleUsers()
    }

    if(users === '') {
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

            <MainStyle>
                <FlexBox>
                    <TitleListStyle>
                        Usuários
                    </TitleListStyle>
                    <Link to='/register'>
                        <ButtonStyle variant="contained" color="primary">
                            criar
                        </ButtonStyle>
                    </Link>
                </FlexBox>

                <Table users={users} />
            </MainStyle>
        </div>
    )
}