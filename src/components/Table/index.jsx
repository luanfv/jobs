import React, {useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {TitleStyle, TableRowStyle, PaperTable} from './../../themes/styled'
import {Redirect} from 'react-router-dom'

export default (props) => {
    const {users} = props
    const [handleUser, setHandleUser] = useState(false)
    const [userId, setUserId] = useState('')

    const configParams = (id) => {
        setUserId(id)
        setHandleUser(true)
    }

    if(handleUser) {
        return <Redirect to={`/user/${userId}`} />
    }

    return (
        <PaperTable>
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
        </PaperTable>
    )
}