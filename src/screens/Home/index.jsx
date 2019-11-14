import React from 'react'
import {MainStyle, FlexBox, TitleListStyle} from './style'
import {ButtonStyle} from '../../theme/styled'
import Header from './../../components/Header'
import Table from './../../components/Table'

export default () => (
    <div>
        <Header />
        <MainStyle>
            <FlexBox>
                <TitleListStyle>
                    Usuários
                </TitleListStyle>
                <ButtonStyle variant="contained" color="primary">
                    criar
                </ButtonStyle>
            </FlexBox>

            <Table />
        </MainStyle>
    </div>
)