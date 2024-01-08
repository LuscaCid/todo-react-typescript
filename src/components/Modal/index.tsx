import React from 'react'
import { Container } from './style'

interface Props {
    children : React.ReactNode
}
//geralmente um modal tem uma parte que esconde as de trás, uma fade, um background opaco
const Modal = ({children}: Props) => {
    return (
        <Container id='modal'>
            <div className='fade'></div>
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
