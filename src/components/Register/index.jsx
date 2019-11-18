import React, {useState} from 'react'
import {MainStyle, PaperStyle, FormStyle,TitleStyle , TextFieldStyle, ButtonStyle, SpaceStyle} from './../../themes/styled'
import {localApi} from './../../services/api'
import Sucess from './../../components/SucessMsg'
import {Redirect} from 'react-router-dom'

export default () => {
    const [name, setName] = useState('')
    const [stack, setStack] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')

    const [isName, setIsName] = useState(true)
    const [isStack, setIsStack] = useState(true)
    const [isBirthday, setIsBirthday] = useState(true)
    const [isEmail, setIsEmail] = useState(true)

    const [isRedirection, setIsRedirection] = useState(false)
    const [isError, setIsError] = useState(false)

    const checkForm = () => {
        let isOk = true

        if(name.trim() === '') {
            setIsName(false)
            isOk = false
        } 
        else {
            setIsName(true)
        }

        if(stack.trim() === '') {
            setIsStack(false)
            isOk = false
        }
        else {
            setIsStack(true)
        }

        if(birthday.trim() === '') {
            setIsBirthday(false)
            isOk = false
        }
        else {
            setIsBirthday(true)
        }

        if(email.trim() === '' || email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
            setIsEmail(false)
            isOk = false
        }
        else {
            setIsEmail(true)
        }

        return isOk
    }

    const handleUser = async () => {
        if(checkForm()) {
            const date  = birthday.split('-')
            const birthdayFormat = ((`${date[2]}/${date[1]}/${date[0]}`))
            
            const user = {name: name, stack: stack, birthday: birthdayFormat, email: email}

            try {
                await localApi.post('/users', user)
                setIsRedirection(true)
            }
            catch(e) {
                setIsError(true)
            }
        }
    }

    if(isRedirection) {
        return <Sucess />
    }

    if(isError) {
        return <Redirect to='error' />
    }

    return (
        <MainStyle>
            <PaperStyle>
                <FormStyle>
                    <TitleStyle fontSize='24'>Criar usuário</TitleStyle>
                    <SpaceStyle />

                    { 
                        isName ? 
                        <TextFieldStyle label='Nome' value={name} onChange={(e) => setName(e.target.value)} value={name} />
                        :
                        <TextFieldStyle error label='Nome' value={name} onChange={(e) => setName(e.target.value)} value={name} />
                    }
                    <SpaceStyle />
                    
                    {
                        isStack ?
                        <TextFieldStyle label='Vaga' value={stack} onChange={(e) => setStack(e.target.value)} value={stack} />
                        :
                        <TextFieldStyle error label='Vaga' value={stack} onChange={(e) => setStack(e.target.value)} value={stack} />
                    }
                    <SpaceStyle />
                    
                    {
                        isBirthday ?
                        <TextFieldStyle type='date' label='Data de Nascimento' InputLabelProps={{shrink: true,}} 
                        onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                        :
                        <TextFieldStyle error type='date' label='Data de Nascimento' InputLabelProps={{shrink: true,}} 
                        onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                    }
                    <SpaceStyle />

                    {
                        isEmail ?
                        <TextFieldStyle type='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} value={email} />
                        :
                        <TextFieldStyle error type='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} value={email} />
                    }
                    <SpaceStyle />
                    
                    <ButtonStyle variant="contained" color="primary" width="280" onClick={handleUser}>Enviar</ButtonStyle>
                </FormStyle>
            </PaperStyle>
        </MainStyle>
    )
}