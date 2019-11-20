import React, {useState, useEffect} from 'react'
import {PaperStyle, MainStyle, TitleStyle, ButtonStyle, SpaceStyle, FlexMainUserStyle, DeleteOutlineIconStyle, CreateIconStyle} from './../../themes/styled'
import {Redirect, Link} from 'react-router-dom'
import {localApi} from './../../services/api'

export default (props) => {
    const {infoUser} = props
    const [isRedirection, setIsRedirection] = useState(false)
    const [isError, setIsError] = useState(false)

    const deleteUser = async () => {
        try {
            await localApi.delete(`/users/${infoUser.id}`)
            setIsRedirection(true)
        }
        catch(e) {
            setIsError(true)
        }  
    }

    useEffect(() => {
    }, [isRedirection, isError])

    if(isError) {
        return <Redirect to='error' />
    }

    if(isRedirection) {
        return <Redirect to='/' />
    }  

    return (
        <MainStyle>
            <PaperStyle>
                <FlexMainUserStyle>
                    <div>
                        <CreateIconStyle />
                        <DeleteOutlineIconStyle onClick={() => deleteUser()} />
                    </div>

                    <div>
                        <TitleStyle fontSize='24'>{infoUser.name}</TitleStyle>

                        <SpaceStyle />

                        <p>Vaga: {infoUser.stack} </p>
                        <p>Data de Nascimento: {infoUser.birthday}</p>
                        <p>Email: {infoUser.email}</p>

                        <SpaceStyle />

                        
                    </div>
                </FlexMainUserStyle> 
                <Link to='/'>
                    <ButtonStyle variant="contained" color="primary">
                        Voltar
                    </ButtonStyle>
                </Link>               
            </PaperStyle>
        </MainStyle>
    )
}