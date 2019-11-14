import React from 'react'
import {MainStyle, TitleListStyle} from './style'
import {ButtonStyle} from '../../theme/styled'
import Header from './../../components/Header'

export default () => (
    <div>
        <Header />
        <MainStyle>
            <TitleListStyle>
                Usuários
            </TitleListStyle>
            <ButtonStyle variant="contained" color="primary">
                criar
            </ButtonStyle>
        </MainStyle>
    </div>
)