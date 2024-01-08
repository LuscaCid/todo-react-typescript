import React from 'react'
import { Container } from './style'

interface Props {
    children : React.ReactNode
}
//geralmente um modal tem uma parte que esconde as de trás, uma fade, um background opaco
const Modal = ({children}: Props) => {

    const closeCloseWithClick = (event : React.MouseEvent) => {
        const modal = document.querySelector('#modal')
        modal!.classList.add('hide')
    
    }

    return (
        <Container id='modal' className='hide'>
            <div className='fade' onClick={closeCloseWithClick}></div>
            <div className='modal'>
                <h1>
                    Edição
                    <button>
                        x
                    </button>
                </h1>
                {children}
            </div>
        </Container>
    )
}

export default Modal
