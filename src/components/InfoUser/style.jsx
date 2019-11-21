import styled from 'styled-components'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import CreateIcon from '@material-ui/icons/Create'

export const MainModalStyle = styled.div`
    && {
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);

        position: absolute;
        width: 500px;
        background: white;
        border-radius: 5px;
        padding: 25px;

        @media only screen and (max-width: 550px) {
            width: 85%;
        }
    }
`

export const DeleteOutlineIconStyle = styled(DeleteOutlineIcon)`
    && {
        color: black;
        padding: 5px;
        margin: 0px 2px;
        width: 30px;
        height: 30px;

        :hover {
            color: #e53935;
            cursor: pointer;
        }

        @media only screen and (max-width: 550px) {
            margin: 0px 0px;
        }
    }
`

export const CreateIconStyle = styled(CreateIcon)`
    && {
        color: black;
        padding: 5px;
        margin: 0px 2px;
        width: 30px;
        height: 30px;

        :hover { 
            color: #43a047;
            cursor: pointer;
        }

        @media only screen and (max-width: 550px) {
            margin: 0px 0px;
        }
    }
`