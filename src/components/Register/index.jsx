import React, {useState} from 'react'
import {MainStyle, PaperStyle, FormStyle,TitleStyle , TextFieldStyle, ButtonStyle, SpaceStyle} from './../../themes/styled'

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

                    <TextFieldStyle label='Nome' value={name} onChange={(e) => setName(e.target.value)} value={name} />
                    <SpaceStyle />
                    
                    <TextFieldStyle label='Vaga' value={stack} onChange={(e) => setStack(e.target.value)} value={stack} />
                    <SpaceStyle />
                    
                    <TextFieldStyle label='Data de Nascimento' type="date" 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setBrith(e.target.value)} value={birth} />
                    <SpaceStyle />

                    <TextFieldStyle label='Email' value={email} onChange={(e) => setEmail(e.target.value)} value={email} />
                    <SpaceStyle />
                    
                    <ButtonStyle variant="contained" color="primary" width="280" onClick={handleUser}>Enviar</ButtonStyle>
                </FormStyle>
            </PaperStyle>
        </MainStyle>
    )
}