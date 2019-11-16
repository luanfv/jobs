import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

export const PaperStyle = styled(Paper)`
    && {
        padding: 20px;

        p {
            padding: 10px 0px;
            font-size: 14px;
        }
    }
`

export const MainStyle = styled.main`
    width-max: 500px;
    padding: 60px 40px;
`

export const FormStyle = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

export const TextFieldStyle = styled(TextField)`
    && {
        width: 280px;
        padding: 5px;
    }
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

export const TitleStyle = styled.label`
    color: #7C7C7C;
    font-weight: 500;
    font-size: ${props => `${props.fontSize}px`};
`


export const SpaceStyle = styled.div`
    padding: 10px;
    padding: ${(props) => `${props.padding}px`};
`