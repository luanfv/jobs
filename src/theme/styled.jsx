import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const MainStyle = styled.main`
    width-max: 500px;
    padding: 60px 40px;
`

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
    font-weight: 500;
    font-size: ${props => `${props.fontSize}px`};
`


export const SpaceStyle = styled.div`
    padding: 10px;
    padding: ${(props) => `${props.padding}px`};
`