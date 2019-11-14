import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {TitleStyle} from './../../theme/styled'

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

export default () => (
    <Paper>
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="center">
                    <TitleStyle>ID</TitleStyle>
                </TableCell>
                <TableCell align="center">
                    <TitleStyle>Nome</TitleStyle>
                </TableCell>
                <TableCell align="center">
                    <TitleStyle>Vaga</TitleStyle>
                </TableCell>
                <TableCell align="center">
                    <TitleStyle>Data de Nascimento</TitleStyle>
                </TableCell>
                <TableCell align="center">
                    <TitleStyle>Email</TitleStyle>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map(row => (
            <TableRow key={row.id}>
                <TableCell align="center" component="th" scope="row">
                {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.stack}</TableCell>
                <TableCell align="center">{row.birth}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </Paper>
)