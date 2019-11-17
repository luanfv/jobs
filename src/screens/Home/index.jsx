import React from 'react'
import {FlexBox, TitleListStyle} from './style'
import {MainStyle, ButtonStyle} from '../../themes/styled'
import Header from './../../components/Header'
import Table from './../../components/Table'
import {Link} from 'react-router-dom'

export default () => (
    <div>
        <Header />
        <MainStyle>
            <FlexBox>
                <TitleListStyle>
                    Usuários
                </TitleListStyle>
                <Link to='/register'>
                    <ButtonStyle variant="contained" color="primary">
                        criar
                    </ButtonStyle>
                </Link>
            </FlexBox>

            <Table />
        </MainStyle>
    </div>
)