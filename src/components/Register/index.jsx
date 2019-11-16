import React, {useState} from 'react'
import {MainStyle, PaperStyle, FormStyle,TitleStyle , TextFieldStyle, ButtonStyle, SpaceStyle} from './../../theme/styled'

export default () => {
    const [name, setName] = useState('')
    const [stack, setStack] = useState('')
    const [birth, setBrith] = useState('')
    const [email, setEmail] = useState('')

    const handleUser = () => {
        const user = {name: name, stack: stack, birth: birth, email: email}
        console.log(user)
    }

    return (
        <MainStyle>
            <PaperStyle>
                <FormStyle>
                    <TitleStyle fontSize='24'>Criar usuário</TitleStyle>
                    <SpaceStyle />
                    
                    <SpaceStyle padding='5' />
                    <TextFieldStyle label='Nome' value={name} onChange={(e) => setName(e.target.value)} value={name} />
                    
                    <SpaceStyle padding='5' />
                    <TextFieldStyle label='Vaga' value={stack} onChange={(e) => setStack(e.target.value)} value={stack} />
                    
                    <SpaceStyle padding='5' />
                    <TextFieldStyle label='Data de Nascimento' value={birth} onChange={(e) => setBrith(e.target.value)} value={birth} />

                    <TextFieldStyle label='Email' value={email} onChange={(e) => setEmail(e.target.value)} value={email} />

                    <SpaceStyle />
                    <ButtonStyle variant="contained" color="primary" width="280" onClick={handleUser}>Enviar</ButtonStyle>
                </FormStyle>
            </PaperStyle>
        </MainStyle>
    )
}