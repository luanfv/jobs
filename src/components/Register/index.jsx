import React from 'react'
import {MainStyle, PaperStyle, FormStyle,TitleStyle , TextFieldStyle, ButtonStyle, SpaceStyle} from './../../theme/styled'

export default () => (
    <MainStyle>
        <PaperStyle>
            <FormStyle>
                <TitleStyle fontSize='24'>Criar usuário</TitleStyle>
                <SpaceStyle padding='10' />
                
                <SpaceStyle padding='5' />
                <TextFieldStyle label='Nome' />
                
                <SpaceStyle padding='5' />
                <TextFieldStyle label='Vaga' />
                
                <SpaceStyle padding='5' />
                <TextFieldStyle label='Data de Nascimento' />

                <TextFieldStyle label='Email' />

                <SpaceStyle padding='10' />
                <ButtonStyle variant="contained" color="primary" width="280">Enviar</ButtonStyle>
            </FormStyle>
        </PaperStyle>
    </MainStyle>
)