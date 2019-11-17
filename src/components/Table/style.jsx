import styled from 'styled-components'
import TableRow from '@material-ui/core/TableRow'

export const TableRowStyle = styled(TableRow)`
    && {
        :hover {
            background: #eeeeee;
            cursor: pointer;
        }
    }
`

export const MainLoaderStyle = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`