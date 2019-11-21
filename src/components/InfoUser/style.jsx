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
        border-radius: 50%;
        padding: 5px;
        margin: 0px 2px;
        width: 30px;
        height: 30px;

        :hover {
            margin: 0px 0px;
            width: 35px;
            height: 35px;
            cursor: pointer;
        }
    }
`

export const CreateIconStyle = styled(CreateIcon)`
    && {
        border-radius: 50%;
        padding: 5px;
        margin: 0px 2px;
        width: 30px;
        height: 30px;

        :hover {
            margin: 0px 0px;
            width: 35px;
            height: 35px;
            cursor: pointer;
        }
    }
`