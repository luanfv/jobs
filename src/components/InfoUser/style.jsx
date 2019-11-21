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
        margin: 0px 1px;
        width: 35px;
        height: 35px;

        :hover {
            cursor: pointer;
            background: #ef5350;
        }

        @media only screen and (max-width: 630px) {
            margin: 0;
            width: 30px;
            height: 30px;
        }
    }
`

export const CreateIconStyle = styled(CreateIcon)`
    && {
        border-radius: 50%;
        padding: 5px;
        margin: 0px 1px;
        width: 35px;
        height: 35px;

        :hover {
            cursor: pointer;
            background: #ffee58;
        }

        @media only screen and (max-width: 630px) {
            margin: 0;
            width: 30px;
            height: 30px;
        }
    }
`