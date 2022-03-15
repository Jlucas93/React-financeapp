import Modal from 'react-modal';
import { Container } from './style';

interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"> 
            <Container>

                <h1>Cadastrar transação</h1>
                <input placeholder='Nome'/>
                <input type='number' placeholder='Valor'/>
                <input placeholder='Categoria'/>
                <button type='submit'>Cadastrar</button>


            </Container>
        </Modal>

    )
}