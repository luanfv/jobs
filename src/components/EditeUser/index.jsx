import React, {useState} from 'react'
import {MainStyle, PaperStyle, FormStyle,TitleStyle , TextFieldStyle, ButtonStyle, SpaceStyle} from './../../themes/styled'
import {localApi} from './../../services/api'
import Sucess from './../../components/SucessMsg'
import {Redirect} from 'react-router-dom'
import {updateUser} from './../../helpers'

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

    const verificationInformation = async () => {
        const response = await updateUser({name, stack, birthday, email})

        if(response.length > 1) { 
            setIsName(response[0])
            setIsStack(response[1])
            setIsBirthday(response[2])
            setIsEmail(response[3])
        }
        else {
            await localApi.put(`/users/${infoUser.id}`, response[0])
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
                    <TitleStyle fontSize='24'>Editar perfil do {name}</TitleStyle>
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
                    
                    <ButtonStyle variant="contained" color="primary" width="280" onClick={() => verificationInformation()}>
                        Atualizar
                    </ButtonStyle>

                </FormStyle>
            </PaperStyle>
        </MainStyle>
    )
}