import styled from 'styled-components'
import TableRow from '@material-ui/core/TableRow'
import {Link} from 'react-router-dom'

export const TableRowStyle = styled(TableRow)`
    && {
        :hover {
            background: #eeeeee;
            cursor: pointer;
        }
    }
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    display: block;
`