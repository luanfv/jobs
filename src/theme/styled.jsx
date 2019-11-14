import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const ButtonStyle = styled(Button)`
    && {
        height: 40px;
        width: 150px;

    }

    label {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;

        color: #FFFFFF;
    }
`

export const TitleStyle = styled.label`
    color: #7C7C7C;
    font-weight: 800;
`