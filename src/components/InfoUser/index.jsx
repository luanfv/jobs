import React from 'react'
import {PaperStyle, MainStyle, TitleStyle, ButtonStyle, SpaceStyle} from './../../themes/styled'
import {Link} from 'react-router-dom'

export default (props) => {
    const {infoUser} = props

    return (
        <MainStyle>
            <PaperStyle>
                <TitleStyle fontSize='24'>{infoUser.name}</TitleStyle>

                <SpaceStyle />

                <p>Vaga: {infoUser.stack} </p>
                <p>Data de Nascimento: {infoUser.birthday}</p>
                <p>Email: {infoUser.email}</p>

                <SpaceStyle />

                <Link to='/'>
                    <ButtonStyle variant="contained" color="primary">
                        Voltar
                    </ButtonStyle>
                </Link>                
            </PaperStyle>
        </MainStyle>
    )
}