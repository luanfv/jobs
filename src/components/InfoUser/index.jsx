import React from 'react'
import {PaperStyle} from './style'
import {MainStyle, TitleStyle, ButtonStyle, SpaceStyle} from './../../theme/styled'
import {Link} from 'react-router-dom'

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

                <Link to='/'>
                    <ButtonStyle variant="contained" color="primary">
                        Voltar
                    </ButtonStyle>
                </Link>                
            </PaperStyle>
        </MainStyle>
        
    )
}