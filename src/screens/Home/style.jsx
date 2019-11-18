import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

export const TitleListStyle = styled.h4`
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
`

export const ButtonStyle = styled(Button)`
    && {
        height: 40px;
        width: 150px;
        width: ${props => `${props.width}px`};
    }

    a {
        text-decoration: none;
        width: 100%;
        height: 100%px;
    }

    label {
        color: #FFFFFF;
    }
`