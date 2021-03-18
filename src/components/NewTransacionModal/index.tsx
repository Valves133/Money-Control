import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransacionModal({isOpen, onRequestClose}:NewTransactionProps){
  const [title, setTitle]  = useState('');
  const [value, setValue]  = useState(0);  
  const [category, setCategory]  = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data);
  }

  return(
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >

    <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
    >
      <img src={closeImg} alt="Close"/>
    </button>

    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Register transaction</h2>

      <input 
        placeholder="Title" 
        value={title}
        onChange={event =>setTitle(event.target.value)}
      />

      <input 
        placeholder="Value" 
        type="number" 
        value={value}
        onChange={event =>setValue(Number(event.target.value))}  
      />

      <TransactionTypeContainer>
        <RadioBox
          //className={type === 'deposit' ? 'active' : ''}
          type="button"
          onClick={() => {setType('deposit')}}
          isActive={type === 'deposit'}
          activeColor="green"
        >
          <img src={incomeImg} alt="Income"/>
          <span>Income</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => {setType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor="red"
        >
          <img src={outcomeImg} alt="Outcome"/>
          <span>Outcome</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input 
        placeholder="Category"
        value={category}
        onChange={event =>setCategory(event.target.value)}
     />

      <button type="submit">Register</button>

    </Container>
  </Modal>

  )
}