import React, {useEffect, useState} from 'react'
import {TableRowStyle} from './style'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {TitleStyle} from './../../theme/styled'
import {Redirect} from 'react-router-dom'

const createData = (id, name, stack, birth, email) => {
  return { id, name, stack, birth, email }
}

const rows = [
  createData(1, 'Joaozinho', 'Front-end', '07/09/1998', 'joaozinho@gmail.com'),
  createData(2, 'Maria', 'Front-end', '03/05/2001', 'mariazinha@gmail.com'),
  createData(3, 'Josevaldo', 'Full-Stack', '05/02/1998', 'josevaldaum@gmail.com'),
  createData(4, 'Cleiton', 'Back-end', '10/11/1994', 'cleiton@gmail.com'),
  createData(5, 'Florentina', 'Back-end', '19/04/2000', 'flores@gmail.com'),
]

export default () => {
    const [handleUser, setHandleUser] = useState(false)
    const [userId, setUserId] = useState('')

    useEffect(() => {
    }, [])

    const configParams = (id) => {
        setUserId(id)
        setHandleUser(true)
    }
 
    if(handleUser) {
        return <Redirect to={`/user/${userId}`} />
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
                    {rows.map(row => (
                        <TableRowStyle key={row.id} onClick={() => configParams(row.id)}>

                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.stack}</TableCell>
                            <TableCell>{row.birth}</TableCell>
                            <TableCell>{row.email}</TableCell>

                        </TableRowStyle>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}