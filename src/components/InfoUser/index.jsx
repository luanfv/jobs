import React, {useState, useEffect} from 'react'
import {PaperStyle, MainStyle, TitleStyle, ButtonStyle, SpaceStyle, FlexMainUserStyle} from './../../themes/styled'
import {MainModalStyle, DeleteOutlineIconStyle, CreateIconStyle} from './style'
import {Redirect, Link} from 'react-router-dom'
import {localApi} from './../../services/api'
import Sucess from './../SucessMsg'
import Modal from "@material-ui/core/Modal"

export default (props) => {
    const {infoUser} = props
    const [isRedirection, setIsRedirection] = useState(false)
    const [isError, setIsError] = useState(false)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

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
        return <Redirect to='/error' />
    }

    if(isRedirection) {
        return <Sucess />
    }  

    return (
        <MainStyle>
            <PaperStyle>
            
                <FlexMainUserStyle>
                    <div>
                        <Link to={`/edite/${infoUser.id}`}>
                            <CreateIconStyle />
                        </Link>

                        <DeleteOutlineIconStyle onClick={() => handleOpen()} />
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

            <Modal open={open}>
                <MainModalStyle>
                    <h2>Tem certeza que deseja excluir esse usuário ?</h2>
                    <SpaceStyle padding='15' />

                    <div>
                        <ButtonStyle margin='5' variant="contained" onClick={() => deleteUser()}>Sim</ButtonStyle>
                        <ButtonStyle margin='5' variant="contained" color="primary" onClick={() => handleClose()}>Não</ButtonStyle>
                    </div>
                </MainModalStyle>
            </Modal> 
        </MainStyle>
    )
}