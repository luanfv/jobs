import React from 'react'
import {MainStyle, TitleListStyle, ButtonListStyle} from './style'
import Header from './../../components/Header'

export default () => (
    <div>
        <Header />
        <MainStyle>
            <TitleListStyle>
                Usuários
            </TitleListStyle>
            <ButtonListStyle>
                Cadastrar
            </ButtonListStyle>
        </MainStyle>
    </div>
)