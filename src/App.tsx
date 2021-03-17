import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModelOpen,setIsNewTransactionModelOpen] = useState(false);

  function hadleOpenNewTransactionModal() {
    setIsNewTransactionModelOpen(true);
  }

  function hadleClosedNewTransactionModal() {
    setIsNewTransactionModelOpen(false);
  }
  
  return (
    <>
     <Header onOpenNewTransactionModal={hadleOpenNewTransactionModal} />
     <Dashboard />

     <Modal 
          isOpen={isNewTransactionModelOpen}
          onRequestClose={hadleClosedNewTransactionModal}
        >
          <h2>Create transaction</h2>
        </Modal>

     <GlobalStyle />
    </>
  );
}
