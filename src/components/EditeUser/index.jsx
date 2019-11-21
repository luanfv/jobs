import React, {useState} from 'react'
import {MainStyle, PaperStyle, FormStyle,TitleStyle , TextFieldStyle, ButtonStyle, SpaceStyle} from './../../themes/styled'
import {localApi} from './../../services/api'
import Sucess from './../../components/SucessMsg'
import {Redirect} from 'react-router-dom'

export default (props) => {
    const {infoUser} = props 

    const arrayBirthday = infoUser.birthday.split('/')
    const brithdayFormatAmerican = `${arrayBirthday[2]}-${arrayBirthday[1]}-${arrayBirthday[0]}`

    const [name, setName] = useState(infoUser.name)
    const [stack, setStack] = useState(infoUser.stack)
    const [birthday, setBirthday] = useState(brithdayFormatAmerican)
    const [email, setEmail] = useState(infoUser.email)

    const [isName, setIsName] = useState(false)
    const [isStack, setIsStack] = useState(false)
    const [isBirthday, setIsBirthday] = useState(false)
    const [isEmail, setIsEmail] = useState(false)

    const [isRedirection, setIsRedirection] = useState(false)
    const [isError, setIsError] = useState(false)

    const checkForm = () => {
        let isOk = true

        if(name.trim() === '') {
            setIsName(true)
            isOk = false
        } 
        else {
            setIsName(false)
        }

        if(stack.trim() === '') {
            setIsStack(true)
            isOk = false
        }
        else {
            setIsStack(false)
        }

        if(birthday.trim() === '') {
            setIsBirthday(true)
            isOk = false
        }
        else {
            setIsBirthday(false)
        }

        if(email.trim() === '' || email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
            setIsEmail(true)
            isOk = false
        }
        else {
            setIsEmail(false)
        }

        return isOk
    }

    const updateUser = async () => {
        if(checkForm()) {
            const date  = birthday.split('-')
            const birthdayFormat = ((`${date[2]}/${date[1]}/${date[0]}`))
            
            const user = {name: name, stack: stack, birthday: birthdayFormat, email: email}

            await localApi.put(`/users/${infoUser.id}`, user)
            .then(() => setIsRedirection(true))
            .catch(() => setIsError(true))
        }
    }

    if(isError) {
        return <Redirect to='/error' />
    }

    if(isRedirection) {
        return <Sucess />
    }

    return (
        <MainStyle>
            <PaperStyle>
                <FormStyle>
                    <TitleStyle fontSize='24'>Criar usuário</TitleStyle>
                    <SpaceStyle />

                    <TextFieldStyle error={isName} label='Nome' onChange={(e) => setName(e.target.value)} value={name} />
                    <SpaceStyle />

                    <TextFieldStyle error={isStack} label='Vaga'  onChange={(e) => setStack(e.target.value)} value={stack} />
                    <SpaceStyle />
                    
                    <TextFieldStyle error={isBirthday} type='date' label='Data de Nascimento' InputLabelProps={{shrink: true,}} 
                    onChange={(e) => setBirthday(e.target.value)} defaultValue={birthday} />
                    <SpaceStyle />

                    <TextFieldStyle error={isEmail} type='email' label='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <SpaceStyle />
                    
                    <ButtonStyle variant="contained" color="primary" width="280" onClick={updateUser}>Atualizar</ButtonStyle>
                </FormStyle>
            </PaperStyle>
        </MainStyle>
    )
}