import React, {useState, useEffect} from 'react'
import {FlexBox, TitleListStyle, ButtonStyle} from './style'
import {MainStyle, MainLoaderStyle} from '../../themes/styled'
import Header from './../../components/Header'
import Table from './../../components/Table'
import {Link, Redirect} from 'react-router-dom'
import {localApi} from './../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'

export default () => {
    const [users, setUsers] = useState('')
    const [isError, setIsError] = useState(false)

    const handleUsers = async () => {
        try {
            const response = await localApi.get('/users')
            setUsers(response.data)
        }
        catch(e) {
            setIsError(true)
        }
    }

    useEffect(() => {
        handleUsers()
    }, [])
    
    useEffect(() => {
        setInterval(async () => {
            await handleUsers()
        }, 9000)
    }, [])

    if(isError) {
        return <Redirect to='error' />
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