import React from 'react'
import {PaperStyle} from './style'
import {MainStyle, TitleStyle, ButtonStyle, SpaceStyle} from './../../theme/styled'

export default (props) => {
    console.log(props)
    return (
        <MainStyle>
            <PaperStyle>
                <TitleStyle fontSize='24'>Nome</TitleStyle>

                <SpaceStyle />

                <p>Vaga: </p>
                <p>Data de Nascimento: </p>
                <p>Email: </p>

                <SpaceStyle />

                <ButtonStyle variant="contained" color="primary">
                    Voltar
                </ButtonStyle>
            </PaperStyle>
        </MainStyle>
        
    )
}