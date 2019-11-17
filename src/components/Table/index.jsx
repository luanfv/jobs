import React, {useEffect, useState} from 'react'
import {TableRowStyle, MainLoaderStyle} from './style'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {TitleStyle} from './../../themes/styled'
import {Redirect} from 'react-router-dom'
import {localApi} from './../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'

export default () => {
    const [handleUser, setHandleUser] = useState(false)
    const [userId, setUserId] = useState('')
    const [users, setUsers] = useState('')

    const handleUsers = async () => {
        const response = await localApi.get('/users')
        setUsers(response.data)
    }

    const configParams = (id) => {
        setUserId(id)
        setHandleUser(true)
    }

    handleUsers()
 
    if(handleUser) {
        return <Redirect to={`/user/${userId}`} />
    }
    
    if(users === '') {
        return (
            <MainLoaderStyle>
                <CircularProgress />
            </MainLoaderStyle>
        )
    }

    return (
        <Paper>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TitleStyle>ID</TitleStyle>
                        </TableCell>
                        <TableCell>
                            <TitleStyle>Nome</TitleStyle>
                        </TableCell>
                        <TableCell>
                            <TitleStyle>Vaga</TitleStyle>
                        </TableCell>
                        <TableCell>
                            <TitleStyle>Data de Nascimento</TitleStyle>
                        </TableCell>
                        <TableCell>
                            <TitleStyle>Email</TitleStyle>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRowStyle key={user.id} onClick={() => configParams(user.id)}>

                            <TableCell component="th" scope="row">
                                {user.id}
                            </TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.stack}</TableCell>
                            <TableCell>{user.birthday}</TableCell>
                            <TableCell>{user.email}</TableCell>

                        </TableRowStyle>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}