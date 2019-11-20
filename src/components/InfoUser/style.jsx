import styled from 'styled-components'

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